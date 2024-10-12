import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
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
  			title: ['var(--font-size-title)', 'var(--line-height-headings)'],
  			subheading: ['var(--font-size-subheading)', 'var(--line-height-headings)']
  		},
  		colors: {
  			background: 'var(--color-background)',
  			select: 'var(--color-select)',
  			fill: 'var(--color-fill)',
  			'primary-color': 'var(--color-primary)',
  			'secondary-color': 'var(--color-secondary)',
  			'tertiary-color': 'var(--color-tertiary)'
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
  			'5': 'var(--spacing-5)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		maxWidth: {
  			default: 'var(--max-width-default)',
  			wide: 'var(--max-width-wide)'
  		},
  		boxShadow: {
  			line: 'inset 0 0.05rem 0 0 var(--color-tertiary)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
