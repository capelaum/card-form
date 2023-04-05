import { ComponentProps, ReactNode } from 'react'
import { ButtonStyled } from './styles'

interface ButtonProps extends ComponentProps<typeof ButtonStyled> {
  children: ReactNode
}

export function Button({ children, ...props }: ButtonProps) {
  return <ButtonStyled {...props}>{children}</ButtonStyled>
}
