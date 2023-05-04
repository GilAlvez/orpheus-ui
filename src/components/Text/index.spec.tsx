import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { describe, test } from 'vitest'
import { Text } from '.'
import { Body } from './styles'

describe('Text', () => {
	test('should renders with correct text content', () => {
		const { container } = render(<Text.Body>Body</Text.Body>)
		const bodyText = container.firstChild
		expect(bodyText).toHaveTextContent('Body')
	})

	test('should have the correct className', () => {
		const { container } = render(<Text.Body>Body</Text.Body>)
		const bodyText = container.firstChild as HTMLElement
		expect(bodyText.classList.contains(Body.className)).toBeTruthy()
	})

	test('should have the correct default prop in `size`', () => {
		const { container } = render(<Text.Body>Body</Text.Body>)
		const bodyText = container.firstChild
		expect(bodyText).toHaveAttribute('class', expect.stringContaining('size-md'))
	})

	test('should have the correct default prop in `weight`', () => {
		const { container } = render(<Text.Body>Body</Text.Body>)
		const bodyText = container.firstChild
		expect(bodyText).toHaveAttribute('class', expect.stringContaining('weight-normal'))
	})
})
