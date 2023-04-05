import { ComponentProps } from 'react'
import { Label } from '../Label'
import { ErrorMessage, Input, TextInputWrapper } from './styles'

interface TextInputProps extends ComponentProps<typeof Input> {
  label?: string
  errorMessage?: string
}

export function TextInput({ label, errorMessage, ...props }: TextInputProps) {
  return (
    <TextInputWrapper>
      {label && <Label text={label} htmlFor={props.id} />}
      <Input {...props} hasError={!!errorMessage} />
      {errorMessage && <ErrorMessage>error</ErrorMessage>}
    </TextInputWrapper>
  )
}
