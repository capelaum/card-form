import { FormWrapper } from '@/styles/home'
import { styled } from '@/styles/stitches.config'

export const CardFormWrapper = styled(FormWrapper, {
  gap: '$5',
})

export const FormRow = styled('div', {
  width: '100%',
  display: 'flex',
  gap: '$6',
})

export const DateField = styled('fieldset', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  border: 'none',
  gap: '$1',
})

export const DateInputs = styled('div', {
  display: 'flex',
  gap: '$2',
})
