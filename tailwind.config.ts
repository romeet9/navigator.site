import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'xs': '320px',
      'sm': '480px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1440px',
      '2xl': '1920px',
    },
    extend: {
      fontSize: {
        'body': ['1rem', '1.5'],
        'heading': ['2.074rem', '1.35'],
        'subheading': ['1.2rem', '1.35'],
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
