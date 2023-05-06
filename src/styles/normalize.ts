export const normalize = {
	'*, ::after, ::before': {
		boxSizing: 'border-box',
		borderWidth: 0,
		borderStyle: 'solid',
		margin: 0,
		padding: 0,
	},

	html: {
		tabSize: '4',
		lineHeight: '1.15',
		'-webkit-tap-highlight-color': 'transparent',
		'text-rendering': 'optimizeLegibility',
		'-webkit-font-smoothing': 'antialiased',
		'-moz-osx-font-smoothing': 'grayscale',
		'-webkit-text-size-adjust': 'none',
		'text-size-adjust': 'none',
	},

	body: {
		fontFamily: 'Inter, sans-serif',
		lineHeight: 'inherit',
	},

	'h1, h2, h3, h4, h5, h6': {
		fontSize: 'inherit',
		fontWeight: 'inherit',
	},

	hr: {
		height: 0,
		color: 'inherit',
	},

	'abbr[title]': {
		textDecoration: 'underline dotted',
	},

	'b, strong': {
		fontWeight: 'bolder',
	},

	'code, kbd, pre, samp': {
		fontFamily: "ui-monospace, SFMono-Regular, Consolas, 'Liberation Mono', Menlo, monospace",
		fontSize: '1em',
	},

	small: {
		fontSize: '80%',
	},

	'progress, sub, sup': {
		verticalAlign: 'baseline',
	},

	sub: {
		fontSize: '75%',
		lineHeight: 0,
		position: 'relative',
		bottom: '-0.25em',
	},

	sup: {
		fontSize: '75%',
		lineHeight: 0,
		position: 'relative',
		top: '-0.5em',
	},

	table: {
		textIndent: 0,
		borderColor: 'inherit',
	},

	'button, input, optgroup, select, textarea': {
		fontFamily: 'inherit',
		fontSize: '100%',
		lineHeight: '1.15',
	},

	'button, select': {
		textTransform: 'none',
	},

	'[type="button"], [type="reset"], [type="submit"], button': {
		appearance: 'button',
		backgroundColor: 'transparent',
		backgroundImage: 'none',
		cursor: 'pointer',
	},

	'::-moz-focus-inner': {
		borderStyle: 'none',
	},

	':-moz-focusring': {
		outline: 'ButtonText dotted 1px',
	},

	':-moz-ui-invalid': {
		boxShadow: 'none',
	},

	'::-webkit-inner-spin-button, ::-webkit-outer-spin-button': {
		height: 'auto',
	},

	'[type="search"]': {
		appearance: 'textfield',
		outlineOffset: '-2px',
	},

	'::-webkit-search-decoration': {
		appearance: 'none',
	},

	'::-webkit-file-upload-button': {
		appearance: 'button',
		font: 'inherit',
	},

	summary: {
		display: 'list-item',
	},

	'[hidden]': {
		display: 'none',
	},
};
