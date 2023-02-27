import { type ComponentProps } from '@stitches/react'
import { type ElementType, type ReactNode } from 'react'

import * as S from './styles'

export interface IButtonProps extends ComponentProps<typeof S.Button> {
	size: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
	as?: ElementType
	icon?: ReactNode
}

export const Button = (props: IButtonProps) => {
	const { children, icon, size, ...rest } = props

	return (
		<S.Button hasIcon={!!icon} size={size} tabIndex={0} {...rest}>
			{icon && <S.Icon size={size}>{icon}</S.Icon>}
			{children}
		</S.Button>
	)
}
