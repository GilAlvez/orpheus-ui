export const normalize = {
	'*, ::after, ::before': {
		boxSizing: 'border-box',
	},

	html: {
		tabSize: '4',
		lineHeight: '1.15',
	},

	body: {
		margin: '0',
		fontFamily: "Inter, Montserrat, 'Segoe UI Emoji', sans-serif",
	},

	hr: {
		height: '0',
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
		lineHeight: '0',
		position: 'relative',
		bottom: '-0.25em',
	},

	sup: {
		fontSize: '75%',
		lineHeight: '0',
		position: 'relative',
		top: '-0.5em',
	},

	table: {
		textIndent: '0',
		borderColor: 'inherit',
	},

	'button, input, optgroup, select, textarea': {
		fontFamily: 'inherit',
		fontSize: '100%',
		lineHeight: '1.15',
		margin: '0',
	},

	'button, select': {
		textTransform: 'none',
	},

	'[type="button"], [type="reset"], [type="submit"], button': {
		appearance: 'button',
		border: '0',
	},

	'::-moz-focus-inner': {
		borderStyle: 'none',
		padding: '0',
	},

	':-moz-focusring': {
		outline: 'ButtonText dotted 1px',
	},

	':-moz-ui-invalid': {
		boxShadow: 'none',
	},

	legend: {
		padding: '0',
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
}
