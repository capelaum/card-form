import { ComponentProps, ElementRef, forwardRef } from 'react'
import { Label } from '../Label'
import { ErrorMessage, Input, TextInputWrapper } from './styles'

interface TextInputProps extends ComponentProps<typeof Input> {
  label?: string
  errorMessage?: string
}

export const TextInput = forwardRef<ElementRef<typeof Input>, TextInputProps>(
  ({ label, errorMessage, ...props }: TextInputProps, ref) => {
    return (
      <TextInputWrapper>
        {label && <Label text={label} htmlFor={props.id} />}
        <Input hasError={!!errorMessage} ref={ref} {...props} />
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </TextInputWrapper>
    )
  }
)

TextInput.displayName = 'TextInput'
