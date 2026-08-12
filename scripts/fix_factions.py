#!/usr/bin/env python3
"""修复干员阵营数据：
1. 罗德岛干员阵营补全（nation=罗德岛 且 faction 为空 → faction=罗德岛）
2. 联动干员标注（faction=联动）
3. 异格干员阵营继承（从本体干员继承阵营）
"""

import json
import re
from collections import defaultdict

INPUT_PATH = "c:/Users/李承锐/WorkBuddy/2026-08-11-14-35-42/ark-guess/src/data/operators.json"

# PRTS Wiki Category:联动干员 的 25 个干员
COLLAB_OPERATORS = {
    "艾拉", "八幡海铃", "导火索", "丰川祥子", "灰烬",
    "火龙S黑角", "九色鹿", "莱欧斯", "雷狼龙S空爆",
    "罗德岛隐秘队", "罗小黑", "玛露西尔", "齐尔查克",
    "麒麟R夜刀", "若叶睦", "三角初华", "森西",
    "闪击", "霜华", "双月", "泰拉大陆调查团",
    "焰狐龙梓兰", "医生", "祐天寺若麦", "战车",
}

# 手动映射已知的异格干员 → 本体名
ALTERNATE_FORM_MAP = {
    "阿米娅(医疗)": "阿米娅",
    "阿米娅(近卫)": "阿米娅",
    "凯尔希·思衡托": "凯尔希",
    "凛御银灰": "银灰",
    "圣聆初雪": "初雪",
    "予愿安洁莉娜": "安洁莉娜",
    "新约能天使": "能天使",
    "缄默德克萨斯": "德克萨斯",
    "归溟幽灵鲨": "幽灵鲨",
    "浊心斯卡蒂": "斯卡蒂",
    "纯烬艾雅法拉": "艾雅法拉",
    "荒芜拉普兰德": "拉普兰德",
    "淬羽赫默": "赫默",
    "涤火杰西卡": "杰西卡",
    "斩业星熊": "星熊",
    "假日威龙陈": "陈",
    "耀骑士临光": "临光",
    "塑心": "车尔尼",
    "圣约送葬人": "送葬人",
    "赏金猎人W": "W",
    "历阵锐枪芬": "芬",
    "撷英调香师": "调香师",
    "寒芒克洛丝": "克洛丝",
    "承曦格雷伊": "格雷伊",
    "焰影苇草": "苇草",
    "死芒": "苇草",
    "信仰搅拌机": "刻俄柏",
    "怒潮凛冬": "凛冬",
    "复奏": "空弦",
    "深巡": "极光",
    "时隙": "断崖",
    "琳琅诗怀雅": "诗怀雅",
    "赤刃明霄陈": "陈",
    "司霆惊蛰": "惊蛰",
}


def main():
    with open(INPUT_PATH, "r", encoding="utf-8") as f:
        operators = json.load(f)

    # Build name → operator lookup
    by_name = {op["name"]: op for op in operators}

    # Build set of all operator names for suffix matching
    all_names = set(op["name"] for op in operators)

    # Stats
    stats = {
        "rhodes_island": 0,
        "collab": 0,
        "alternate_form": 0,
        "already_set": 0,
        "still_empty": 0,
    }

    # Step 1: Mark collaboration operators first (highest priority)
    for op in operators:
        if op["name"] in COLLAB_OPERATORS:
            op["faction"] = "联动"
            stats["collab"] += 1

    # Step 2: Alternate forms — inherit faction from base operator (before Rhodes Island fix)
    for op in operators:
        if op["faction"]:
            continue  # Already has faction (e.g. collab), skip

        base_name = None

        # Check manual map first
        if op["name"] in ALTERNATE_FORM_MAP:
            base_name = ALTERNATE_FORM_MAP[op["name"]]
        else:
            # Try pattern matching: name(suffix) or name·suffix
            if "(" in op["name"]:
                base_name = op["name"].split("(")[0].strip()
            elif "·" in op["name"]:
                base_name = op["name"].split("·")[0].strip()
            else:
                # Try suffix matching: check if any existing operator name
                # is a suffix of this operator's name (for prefixed forms)
                for candidate in all_names:
                    if candidate == op["name"]:
                        continue
                    # The candidate must be a suffix of the current name
                    # and the current name must be longer
                    if (
                        len(op["name"]) > len(candidate)
                        and op["name"].endswith(candidate)
                        and len(candidate) >= 2  # avoid single-char matches
                    ):
                        # Prefer the longest matching candidate
                        if base_name is None or len(candidate) > len(base_name):
                            base_name = candidate

        if base_name and base_name in by_name:
            base_op = by_name[base_name]
            if base_op["faction"]:
                op["faction"] = base_op["faction"]
                stats["alternate_form"] += 1

    # Step 3: Fix Rhodes Island (nation=罗德岛 and faction still empty)
    for op in operators:
        if not op["faction"] and op["nation"] == "罗德岛":
            op["faction"] = "罗德岛"
            stats["rhodes_island"] += 1

    # Step 4: For remaining empty factions, leave empty
    for op in operators:
        if not op["faction"]:
            stats["still_empty"] += 1

    # Fix nation field: if nation="罗德岛", it's actually an org not a country
    for op in operators:
        if op["nation"] == "罗德岛":
            op["nation"] = ""  # Clear incorrect nation

    # Count already set
    stats["already_set"] = (
        len(operators)
        - stats["rhodes_island"]
        - stats["collab"]
        - stats["alternate_form"]
        - stats["still_empty"]
    )

    # Write output
    with open(INPUT_PATH, "w", encoding="utf-8") as f:
        json.dump(operators, f, ensure_ascii=False, indent=2)

    print("=== 修复完成 ===")
    print(f"  总干员数: {len(operators)}")
    print(f"  罗德岛阵营补全: {stats['rhodes_island']}")
    print(f"  联动干员标注: {stats['collab']}")
    print(f"  异格干员继承: {stats['alternate_form']}")
    print(f"  原本已有阵营: {stats['already_set']}")
    print(f"  仍为空: {stats['still_empty']}")

    # Show all factions
    factions = defaultdict(list)
    for op in operators:
        f = op["faction"] or "(空)"
        factions[f].append(op["name"])

    print("\n=== 阵营分布 ===")
    for f, names in sorted(factions.items(), key=lambda x: -len(x[1])):
        print(f"  {f}: {len(names)} 个")

    # Show remaining empty factions
    empty = [op for op in operators if not op["faction"]]
    if empty:
        print(f"\n=== 仍为空的干员 ({len(empty)} 个) ===")
        # Group by nation
        by_nation = defaultdict(list)
        for op in empty:
            by_nation[op["nation"] or "(空)"].append(op["name"])
        for n, names in sorted(by_nation.items(), key=lambda x: -len(x[1])):
            print(f"  nation={n}: {len(names)} -> {names[:10]}")


if __name__ == "__main__":
    main()
