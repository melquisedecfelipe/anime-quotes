import { ButtonHTMLAttributes } from 'react'

import * as S from './styles'

type ButtonTypes = ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  variant?: 'filled' | 'outlined'
} & ButtonTypes

const Button = ({ children, variant = 'filled', ...props }: ButtonProps) => (
  <S.Wrapper variant={variant} {...props}>
    {children}
  </S.Wrapper>
)

export default Button
