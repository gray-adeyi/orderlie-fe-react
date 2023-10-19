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
				sponsors: 'rgba(108, 117, 125, 1)'
			},
			fontFamily: {
				serrat: ['Montserrat'],
				roboto: ['Roboto'],
				jakarta: ['Plus Jakarta Sans']
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
				73: '73px',
				45: '45vh',
				60: '60vh',
				90: '90vh',
				304: '304px',
				83: '83px',
				43: '43px',
				80: '80px'
			},
			lineHeight: {
				'extra-loose': '2.5',
				12: '4rem',
				fit: '8',
			},

			fontSize: {
				40: ['40px', {lineHeight: '3.5rem'}]
			},

			borderRadius: {
				35: '35px'
			},

			borderWidth: {
				0.4: '0.42px'
			}
		},
	},
	plugins: [],
};
