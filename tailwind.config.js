const toRem = (px, base = 16) => `${px / base}rem`;

const customSpacing = (spacingArrayInPx) => {
	const spacing = {}
	spacingArrayInPx.forEach((space) => {
		spacing[`${space / 4}`] = toRem(space)
	})
	return spacing
}

module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			spacing: {
				...customSpacing([18, 38, 44, 64, 84, 100, 120, 200, 240]),
			},
			border: (theme) => ({
				...theme('colors'),
				DEFAULT: theme('colors.grey.divider', 'currentColor'),
			}),
			colors: {
				primary: {
					DEFAULT: '#5720CE',
					100: '#7338E5',
				},
				secondary: {
					DEFAULT: '#7CCEB1',
				},
				brown: {
					DEFAULT: '#33142B',
				},
				grey: {
					DEFAULT: '#AAABC2',
				},
			},
			fontSize: {},
			fontFamily: {
				sans: [
					'Poppins',
					'"Helvetica Neue"',
					'Arial',
					'"Noto Sans"',
					'sans-serif',
					'"Apple Color Emoji"',
					'"Segoe UI Emoji"',
					'"Segoe UI Symbol"',
					'"Noto Color Emoji"',
				],
			},
			maxWidth: (theme) => ({
				...theme('spacing'),
			}),
			minWidth: (theme) => ({
				...theme('spacing'),
			}),
			minHeight: (theme) => {
				return {
					...theme('spacing'),
				}
			},
		},
	},
	variants: {
		extend: {
			padding: ['responsive', 'first'],
		},
	},
	plugins: [],
}
