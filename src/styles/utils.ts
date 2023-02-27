import { colors } from './theme'

const gridColumns = {
	0: 'none',
	1: 'repeat(1, minmax(0, 1fr))',
	2: 'repeat(2, minmax(0, 1fr))',
	3: 'repeat(3, minmax(0, 1fr))',
	4: 'repeat(4, minmax(0, 1fr))',
	5: 'repeat(5, minmax(0, 1fr))',
	6: 'repeat(6, minmax(0, 1fr))',
	7: 'repeat(7, minmax(0, 1fr))',
	8: 'repeat(8, minmax(0, 1fr))',
	9: 'repeat(9, minmax(0, 1fr))',
	10: 'repeat(10, minmax(0, 1fr))',
	11: 'repeat(11, minmax(0, 1fr))',
	12: 'repeat(12, minmax(0, 1fr))',
}

export const _gridColumns = (value: keyof typeof gridColumns) => ({
	gridTemplateColumns: gridColumns[value],
})

const scale = {
	0: '0',
	50: '.5',
	75: '.75',
	90: '.9',
	95: '.95',
	100: '1',
	105: '1.05',
	110: '1.1',
	125: '1.25',
	150: '1.5',
	175: '1.75',
	200: '2',
}

export const _scale = (value: keyof typeof scale) => ({
	transform: `scale(${scale[value]})`,
})

// Colors with opacity utilities
function decimalToHexadecimal(valor: string) {
	const decimal = parseFloat(valor.replace(',', '.'))
	if (isNaN(decimal) || decimal < 0 || decimal > 100) {
		throw new Error('The value of decimal must be a number between 0 and 100')
	}

	const hexadecimal = Math.round((decimal * 255) / 100).toString(16)

	return hexadecimal.padStart(2, '0').slice(0, 2)
}
function querySelectorColor(color: keyof typeof colors) {
	if (color in colors) {
		return colors[color]
	} else {
		return null
	}
}

// value example: 'primary500/10'
export const _backgroundWithOpacity = (value: string) => {
	const valueSplited = value.split('/')
	const color = valueSplited[0] as keyof typeof colors
	const opacity = valueSplited[1]

	return { backgroundColor: `${querySelectorColor(color)}${decimalToHexadecimal(opacity)}` }
}
export const _colorWithOpacity = (value: string) => {
	const valueSplited = value.split('/')
	const color = valueSplited[0] as keyof typeof colors
	const opacity = valueSplited[1]

	return { color: `${querySelectorColor(color)}${decimalToHexadecimal(opacity)}` }
}
export const _borderColorWithOpacity = (value: string) => {
	const valueSplited = value.split('/')
	const color = valueSplited[0] as keyof typeof colors
	const opacity = valueSplited[1]

	return { borderColor: `${querySelectorColor(color)}${decimalToHexadecimal(opacity)}` }
}
export const _outlineColorWithOpacity = (value: string) => {
	const valueSplited = value.split('/')
	const color = valueSplited[0] as keyof typeof colors
	const opacity = valueSplited[1]

	return { outlineColor: `${querySelectorColor(color)}${decimalToHexadecimal(opacity)}` }
}
