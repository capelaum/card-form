import { styled } from './stitches.config'

export const HomeWrapper = styled('main', {
  display: 'flex',
  height: '100%',
  overflow: 'hidden',
})

export const ImageWrapper = styled('div', {
  height: '100vh',
  width: '30%',
  minWidth: '300px',

  img: {
    height: '100%',
    width: '100%',
    objectFit: 'cover',
  },
})

export const FormWrapper = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '$5',
  margin: '$10 $8',

  maxWidth: '400px',

  button: {
    marginTop: '$3',
  },
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

export const FormRow = styled('div', {
  width: '100%',
  display: 'flex',
  gap: '$6',
})
