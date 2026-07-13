/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/app/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['"Outfit"', 'system-ui', 'sans-serif'],
        hanken: ['"Hanken Grotesk"', 'system-ui', 'sans-serif'],
        space: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
      },
      // Semantic color tokens consumed by src/components/ui/*.
      // The values reference CSS variables that each component sets on its
      // own root (see `componentThemeClassName`), so the palette stays scoped.
      keyframes: {
        'marquee-left': {
          from: { transform: 'translateX(0%)' },
          to: { transform: 'translateX(-50%)' },
        },
        'marquee-right': {
          from: { transform: 'translateX(-50%)' },
          to: { transform: 'translateX(0%)' },
        },
      },
      animation: {
        'marquee-left': 'marquee-left var(--duration,40s) linear infinite',
        'marquee-right': 'marquee-right var(--duration,40s) linear infinite',
      },
      colors: {
        background: 'var(--color-background)',
        foreground: 'var(--color-foreground)',
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        border: 'var(--color-border)',
        input: 'var(--color-input)',
        ring: 'var(--color-ring)',
        card: 'var(--color-card)',
        'card-foreground': 'var(--color-card-foreground)',
        muted: 'var(--color-muted)',
        'muted-foreground': 'var(--color-muted-foreground)',
        accent: 'var(--color-accent)',
        'accent-foreground': 'var(--color-accent-foreground)',
        destructive: 'var(--color-destructive)',
      },
    },
  },
  plugins: [],
};
