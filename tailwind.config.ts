import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'xs': 'var(--screen-xs)',
      'sm': 'var(--screen-sm)',
      'md': 'var(--screen-md)',
      'lg': 'var(--screen-lg)',
      'xl': 'var(--screen-xl)',
      '2xl': 'var(--screen-2xl)',
    },
    extend: {
      fontSize: {
        'body': ['var(--font-size-body)', 'var(--line-height-body)'],
        'heading': ['var(--font-size-heading)', 'var(--line-height-headings)'],
        'subheading': ['var(--font-size-subheading)', 'var(--line-height-headings)'],
      },
      colors: {
        'background': "var(--color-background)",
        'fill': "var(--color-fill)",
        'primary-text': "var(--color-primary-text)",
        'secondary-text': "var(--color-secondary-text)",
      },
      fontFamily: {
        'commit-mono': ['var(--font-commit-mono)'],
        'tiempos-headline': ['var(--font-tiempos-headline)'],
        'tiempos-text': ['var(--font-tiempos-text)'],
      },
    },
  },
  plugins: [],
};
export default config;
