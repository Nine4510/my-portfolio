/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	tailwindConfig: './styles/tailwind.config.js',
	plugins: [
		require('tailwind-scrollbar-hide'),
		require('prettier-plugin-tailwindcss'),
		require('@tailwindcss/forms'),
	],
}
