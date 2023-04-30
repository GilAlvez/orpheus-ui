import { type ComponentProps } from '@stitches/react'
import { useRef, type ElementType, type ReactNode } from 'react'

import * as S from './styles'

export interface IButtonProps extends ComponentProps<typeof S.Button> {
	as?: ElementType
	icon?: ReactNode
}

const Button = (props: IButtonProps) => {
	const { children, icon, onKeyDown, ref, ...rest } = props

	const buttonRef = useRef<HTMLButtonElement>(null)

	const handleKeyPress = (e: KeyboardEvent) => {
		if (e.key === 'Enter' || e.key === ' ') {
			buttonRef.current?.click()
		}
	}

	return (
		<S.Button hasIcon={!!icon} ref={ref ?? buttonRef} onKeyDown={onKeyDown ?? handleKeyPress} tabIndex={0} {...rest}>
			{icon && <S.Icon size={props.size}>{icon}</S.Icon>}
			{children}
		</S.Button>
	)
}

export default Button
