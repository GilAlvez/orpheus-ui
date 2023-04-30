import { type ComponentProps } from '@stitches/react'
import { createElement, type ElementType } from 'react'

import * as S from './styles'

function createTextComponent<T extends ElementType>(componentName: string, component: T) {
	const Component = (props: ComponentProps<T> & { as?: ElementType }) => {
		const { children, ...rest } = props

		return createElement(component, rest, children)
	}
	// Sets the display name of the component for easier debugging and identification
	// of components during development and in the React DevTools hierarchy.
	Component.displayName = componentName

	return Component
}

const Display = createTextComponent('Display', S.Display)
const Heading = createTextComponent('Heading', S.Heading)
const Title = createTextComponent('Title', S.Title)
const Label = createTextComponent('Label', S.Label)
const Body = createTextComponent('Body', S.Body)

const Text = { Display, Heading, Title, Label, Body }

export default Text
