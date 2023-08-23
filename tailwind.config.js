/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			transitionTimingFunction: { DEFAULT: 'ease-in-out' },
			transitionDuration: { DEFAULT: '400ms' },
			colors: {
				//TODO add main colors
			},
		},
	},
	plugins: [],
}
