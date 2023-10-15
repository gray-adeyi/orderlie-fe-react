/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				bgColor: '#0A39E0',
				bgColorLight: 'rgba(10, 57, 224, 0.80)',
				logo: '#DDE1FC',
				hover: '#9cb0f8be',
			},
			font: {
				logoStyle: 'Montserrat',
			},
			fontWeight: {
				thin: '100',

				extralight: '200',
				light: '300',
				normal: '400',
				medium: '500',
				semibold: '600',
				bold: '700',
				extrabold: '800',

				black: '900',
			},
		},
	},
	plugins: [],
};
