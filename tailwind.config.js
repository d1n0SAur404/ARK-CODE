/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ark: {
          bg: 'var(--color-bg)',
          surface: 'var(--color-surface)',
          card: 'var(--color-card)',
          'card-hover': 'var(--color-card-hover)',
          border: 'var(--color-border)',
          'border-strong': 'var(--color-border-strong)',
          text: 'var(--color-text)',
          'text-secondary': 'var(--color-text-secondary)',
          muted: 'var(--color-muted)',
          primary: 'var(--color-primary)',
          'primary-hover': 'var(--color-primary-hover)',
          'primary-light': 'var(--color-primary-light)',
          accent: 'var(--color-accent)',
          'accent-hover': 'var(--color-accent-hover)',
          'accent-light': 'var(--color-accent-light)',
          success: 'var(--color-success)',
          'success-light': 'var(--color-success-light)',
          warning: 'var(--color-warning)',
          'warning-light': 'var(--color-warning-light)',
          danger: 'var(--color-danger)',
          'danger-light': 'var(--color-danger-light)',
        },
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'Segoe UI', 'PingFang SC', 'Microsoft YaHei', 'sans-serif'],
        mono: ['ui-monospace', 'Cascadia Code', 'Consolas', 'monospace'],
      },
      boxShadow: {
        card: 'var(--shadow-card)',
        'card-hover': 'var(--shadow-card-hover)',
        glow: 'var(--shadow-glow)',
      },
      animation: {
        'fade-in': 'ark-fade-in 0.3s ease-out',
        'pulse-glow': 'ark-pulse-glow 2s infinite',
        'fade-in-demo': 'ark-fade-in-demo 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
