import { type IntrinsicElementsKeys } from '@stitches/react/types/styled-component'
import { forwardRef, type ButtonHTMLAttributes, type ForwardedRef, type ReactNode } from 'react'
import * as S from './styles'

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	color?: 'primary' | 'secondary' | 'success' | 'error' | 'warning'
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
	variant?: 'filled' | 'outlined' | 'text'
	fullWidth?: boolean
	as: IntrinsicElementsKeys | ReactNode
	iconStart?: ReactNode
	iconEnd?: ReactNode
}

export const Button = forwardRef(function Button(props: IButtonProps, ref: ForwardedRef<HTMLButtonElement>) {
	const { children, iconStart, iconEnd, ...rest } = props

	return (
		<S.Button ref={ref} {...rest}>
			{iconStart && <S.Icon>{iconStart}</S.Icon>}
			{children}
			{iconEnd && <S.Icon>{iconEnd}</S.Icon>}
		</S.Button>
	)
})
