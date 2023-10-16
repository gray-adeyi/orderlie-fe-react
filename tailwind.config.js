/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				bgColor: '#0A39E0',
				bgColorLight: 'rgba(10, 57, 224, 0.80)',
				logo: '#DDE1FC',
				hover: '#beccffbe',
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
			spacing: {
				13: '3.25rem',
				15: '3.75rem',
				128: '32rem',
				144: '36rem',
			},
			spacing: {
				1: '8px',
				2: '12px',
				3: '16px',
				4: '24px',
				5: '32px',
				6: '48px',
			},
			lineHeight: {
				'extra-loose': '2.5',
				12: '4rem',
				fit: '8',
			},
		},
	},
	plugins: [],
};
