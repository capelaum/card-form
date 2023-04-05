import { ComponentProps } from 'react'
import { LabelRoot } from './styles'

interface LabelProps extends ComponentProps<typeof LabelRoot> {
  text: string
}

export function Label({ text, ...props }: LabelProps) {
  return <LabelRoot {...props}>{text}</LabelRoot>
}
