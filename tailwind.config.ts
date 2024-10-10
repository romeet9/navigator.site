import type { Config } from "tailwindcss";

const config: Config = {
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		fontSize: {
  			body: ['var(--font-size-body)', 'var(--line-height-body)'],
  			heading: ['var(--font-size-heading)', 'var(--line-height-headings)'],
  			subheading: ['var(--font-size-subheading)', 'var(--line-height-headings)']
  		},
  		colors: {
  			'background-color': 'var(--color-background)',
  			'fill-color': 'var(--color-fill)',
  			'primary-color': 'var(--color-primary)',
  			'secondary-color': 'var(--color-secondary)',
  			'tertiary-color': 'var(--color-tertiary)',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  		},
  		fontFamily: {
  			'commit-mono': ['var(--font-commit-mono)'],
  			'tiempos-headline': ['var(--font-tiempos-headline)'],
  			'tiempos-text': ['var(--font-tiempos-text)']
  		},
  		spacing: {
  			'0': 'var(--spacing-0)',
  			'1': 'var(--spacing-1)',
  			'2': 'var(--spacing-2)',
  			'3': 'var(--spacing-3)',
  			'4': 'var(--spacing-4)',
  			'5': 'var(--spacing-5)',
  			'6': 'var(--spacing-6)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		borderWidth: {
  			'0.8': '0.8px',
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
