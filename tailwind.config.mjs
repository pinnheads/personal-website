/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		colors: {
			'teal': '#00A884',
			'black': '#111418',
			'white': '#F8F8F8',
			'lg-gray': '#A4A4A4',
			'da-gray': '#656565'
		},
		fontFamily: {
			sans: ['Inter Variable', 'sans-serif'],
		},
		extend: {
			screens: {
				'3xl': '1920px',
			}
		},
	},
	plugins: [
		require('tailwindcss-animated'),
	],
}
