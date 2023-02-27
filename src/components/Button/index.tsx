import { type ComponentProps } from '@stitches/react'
import { type ElementType, type ReactNode } from 'react'

import * as S from './styles'

export interface IButtonProps extends ComponentProps<typeof S.Button> {
	as?: ElementType
	iconStart?: ReactNode
	iconEnd?: ReactNode
}

export const Button = (props: IButtonProps) => {
	const { children, iconStart, iconEnd, ...rest } = props

	return (
		<S.Button tabIndex={0} {...rest}>
			{iconStart && <S.Icon>{iconStart}</S.Icon>}
			{children}
			{iconEnd && <S.Icon>{iconEnd}</S.Icon>}
		</S.Button>
	)
}
