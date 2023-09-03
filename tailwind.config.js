/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			transitionTimingFunction: { DEFAULT: 'ease-in-out' },
			transitionDuration: { DEFAULT: '400ms' },
		},
		colors: {
			primary: '#2A2B2F',
			secondary: '#1C1D22',
			box: '#24262C',
			taskBox: '#292B31',
			title: 'rgba(255, 255, 255, 0.5)',
			progressCenter: '#D4A90F',
			progressFull: '#78D700',
		},
	},
	plugins: [],
}
