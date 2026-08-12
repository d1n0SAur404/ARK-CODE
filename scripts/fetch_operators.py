#!/usr/bin/env python3
"""PRTS Wiki 干员数据批量抓取脚本"""

import json
import re
import sys
import time
import urllib.parse
import urllib.request

API_URL = "https://prts.wiki/api.php"
BATCH_SIZE = 50  # MediaWiki API max 50 titles per request
DELAY = 1  # seconds between batches


def api_get(params):
    """Call PRTS Wiki API with GET."""
    url = API_URL + "?" + urllib.parse.urlencode(params)
    req = urllib.request.Request(url, headers={"User-Agent": "ArkGuessBot/1.0"})
    with urllib.request.urlopen(req, timeout=30) as resp:
        return json.loads(resp.read().decode("utf-8"))


def get_operator_names():
    """Get all operator page names from Category:干员."""
    names = []
    params = {
        "action": "query",
        "list": "categorymembers",
        "cmtitle": "Category:干员",
        "cmlimit": "500",
        "format": "json",
    }
    while True:
        data = api_get(params)
        members = data.get("query", {}).get("categorymembers", [])
        names.extend(m["title"] for m in members)
        if "continue" not in data:
            break
        params.update(data["continue"])
        time.sleep(DELAY)
    return names


def find_template(wikitext, template_name):
    """Find a MediaWiki template call, handling nested braces. Returns the full template text or None."""
    start_marker = "{{" + template_name
    search_from = 0
    while True:
        idx = wikitext.find(start_marker, search_from)
        if idx == -1:
            return None

        # Check the char after the template name — must be a delimiter
        after_pos = idx + len(start_marker)
        after_char = wikitext[after_pos] if after_pos < len(wikitext) else ""
        if after_char in ("|", "\n", "\r", " ", "\t", "}", ""):
            break  # valid match
        # Otherwise it's a longer name (e.g. CharinfoV2Extra), keep searching
        search_from = idx + 1

    pos = idx + 2  # skip {{
    depth = 1
    while pos < len(wikitext) and depth > 0:
        if wikitext[pos:pos + 2] == "{{":
            depth += 1
            pos += 2
        elif wikitext[pos:pos + 2] == "}}":
            depth -= 1
            pos += 2
        else:
            pos += 1

    if depth != 0:
        return None  # unbalanced braces

    return wikitext[idx:pos]


def parse_template(wikitext, template_name):
    """Parse a MediaWiki template call and return its parameters as a dict."""
    template_full = find_template(wikitext, template_name)
    if not template_full:
        return {}

    # Find the first | after the template name
    first_pipe = template_full.find("|")
    if first_pipe == -1:
        return {}

    body = template_full[first_pipe + 1:]
    # Remove trailing }}
    if body.endswith("}}"):
        body = body[:-2]

    # Split on top-level | (not inside nested {{...}})
    params = []
    current = ""
    depth = 0
    i = 0
    while i < len(body):
        if body[i:i + 2] == "{{":
            depth += 1
            current += "{{"
            i += 2
        elif body[i:i + 2] == "}}":
            depth -= 1
            current += "}}"
            i += 2
        elif body[i] == "|" and depth == 0:
            params.append(current)
            current = ""
            i += 1
        else:
            current += body[i]
            i += 1
    if current.strip():
        params.append(current)

    # Parse key=value from each param
    result = {}
    for p in params:
        if "=" not in p:
            continue
        eq_idx = p.index("=")
        key = p[:eq_idx].strip()
        val = p[eq_idx + 1:].strip()
        # Clean up wikitext formatting
        val = re.sub(r"<[^>]+>", "", val)  # remove HTML tags
        val = re.sub(r"<!--.*?-->", "", val, flags=re.DOTALL)  # remove comments
        val = re.sub(r"\[\[[^\]]*\|([^\]]*)\]\]", r"\1", val)  # [[a|b]] -> b
        val = re.sub(r"\[\[([^\]]*)\]\]", r"\1", val)  # [[a]] -> a
        val = re.sub(r"\{\{[^}]*\}\}", "", val)  # remove simple nested templates
        val = re.sub(r"'''?", "", val)  # remove bold/italic
        val = val.strip()
        result[key] = val
    return result


def batch_fetch_content(titles):
    """Fetch raw wikitext for a batch of page titles."""
    # Use pipe-separated titles
    titles_param = "|".join(titles)
    params = {
        "action": "query",
        "prop": "revisions",
        "rvprop": "content",
        "titles": titles_param,
        "format": "json",
    }
    data = api_get(params)
    pages = data.get("query", {}).get("pages", {})
    result = {}
    for pageid, page in pages.items():
        title = page.get("title", "")
        revisions = page.get("revisions", [])
        if revisions and "*" in revisions[0]:
            result[title] = revisions[0]["*"]
        else:
            result[title] = ""
    return result


def extract_operator_data(name, wikitext):
    """Extract operator data from wikitext."""
    if not wikitext:
        return None

    # Parse CharinfoV2 template
    char_info = parse_template(wikitext, "CharinfoV2")

    # Parse 人员档案set template
    archive_info = parse_template(wikitext, "人员档案set")

    # Also try Charinfo (older template)
    if not char_info:
        char_info = parse_template(wikitext, "Charinfo")

    if not char_info and not archive_info:
        return None

    # Extract fields
    rarity_raw = char_info.get("稀有度", "")
    try:
        rarity = int(rarity_raw) + 1  # 0->1star, 5->6star
    except (ValueError, TypeError):
        rarity = 0

    # Map profession to Chinese
    profession_map = {
        "先锋": "先锋", "近卫": "近卫", "重装": "重装",
        "狙击": "狙击", "术师": "术师", "医疗": "医疗",
        "辅助": "辅助", "特种": "特种",
    }
    profession = char_info.get("职业", "")

    # Build operator object
    operator = {
        "name": char_info.get("干员名", name),
        "rarity": rarity,
        "profession": profession,
        "subProfession": char_info.get("分支", ""),
        "birthplace": archive_info.get("出身地", char_info.get("所属国家", "")),
        "race": archive_info.get("种族", ""),
        "faction": char_info.get("所属组织", ""),
        "nation": char_info.get("所属国家", ""),
        "combatExperience": archive_info.get("战斗经验", ""),
        "oripathy": archive_info.get("矿石病感染情况", ""),
    }

    # Only return if we have at least name and rarity
    if not operator["name"] or rarity == 0:
        return None

    return operator


def main():
    print("Step 1: Fetching operator list from PRTS Wiki...")
    names = get_operator_names()
    print(f"  Found {len(names)} operator pages")

    # Filter out non-standard operators
    # Keep alternate forms and protocol variants but mark them
    skip_patterns = ["(集成战略)", "(保全派驻)", "(卫戍协议)"]
    filtered = [n for n in names if not any(p in n for p in skip_patterns)]
    print(f"  After filtering: {len(filtered)} operators")

    print("\nStep 2: Fetching page content in batches of {}...".format(BATCH_SIZE))

    operators = []
    total_batches = (len(filtered) + BATCH_SIZE - 1) // BATCH_SIZE

    for i in range(0, len(filtered), BATCH_SIZE):
        batch = filtered[i:i + BATCH_SIZE]
        batch_num = i // BATCH_SIZE + 1
        print(f"  Batch {batch_num}/{total_batches}: fetching {len(batch)} pages...")

        try:
            pages = batch_fetch_content(batch)
        except Exception as e:
            print(f"    Error: {e}")
            time.sleep(DELAY * 2)
            continue

        for name, wikitext in pages.items():
            op = extract_operator_data(name, wikitext)
            if op:
                operators.append(op)

        time.sleep(DELAY)

    print(f"\nStep 3: Extracted {len(operators)} operators")

    # Sort by rarity (descending) then by name
    operators.sort(key=lambda x: (-x["rarity"], x["name"]))

    # Write JSON output
    output_path = "c:/Users/李承锐/WorkBuddy/2026-08-11-14-35-42/ark-guess/src/data/operators.json"
    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(operators, f, ensure_ascii=False, indent=2)

    print(f"\nDone! Written {len(operators)} operators to {output_path}")

    # Print summary
    rarity_counts = {}
    prof_counts = {}
    for op in operators:
        r = op["rarity"]
        rarity_counts[r] = rarity_counts.get(r, 0) + 1
        p = op["profession"]
        prof_counts[p] = prof_counts.get(p, 0) + 1

    print("\n=== Summary ===")
    print("By rarity:")
    for r in sorted(rarity_counts.keys(), reverse=True):
        print(f"  {r}星: {rarity_counts[r]}")
    print("By profession:")
    for p, c in sorted(prof_counts.items(), key=lambda x: -x[1]):
        print(f"  {p}: {c}")

    # Check for missing data
    missing_race = sum(1 for op in operators if not op["race"])
    missing_oripathy = sum(1 for op in operators if not op["oripathy"])
    missing_combat = sum(1 for op in operators if not op["combatExperience"])
    missing_birthplace = sum(1 for op in operators if not op["birthplace"])
    print(f"\nMissing data:")
    print(f"  race: {missing_race}")
    print(f"  oripathy: {missing_oripathy}")
    print(f"  combatExperience: {missing_combat}")
    print(f"  birthplace: {missing_birthplace}")


if __name__ == "__main__":
    main()
