/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		fontFamily: {
			sans: ['Inter Variable', 'sans-serif'],
			mono: ['monospace'], // Ensure mono font is available
		},
		extend: {
			colors: {
				'teal': '#00A884',
				'black': '#111418',
				'white': '#F8F8F8',
				'lg-gray': '#A4A4A4',
				'da-gray': '#656565'
			},
			screens: {
				'3xl': '1920px',
			},
            animation: {
                'progress': 'progress 1s ease-in-out infinite',
            },
            keyframes: {
                progress: {
                    '0%': { transform: 'scaleX(0)' },
                    '100%': { transform: 'scaleX(1)' },
                }
            }
		},
	},
	plugins: [
		require('tailwindcss-animated'),
		require('autoprefixer'),
	],
}
