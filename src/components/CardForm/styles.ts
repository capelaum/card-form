import { styled } from '@/styles/stitches.config'

export const FormWrapper = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '$5',

  margin: '$10 $5',
  marginLeft: 350,

  maxWidth: 450,

  button: {
    marginTop: '$3',
  },

  '@media(max-width: 1200px)': {
    marginLeft: 250,
  },

  '@media(max-width: 800px)': {
    marginLeft: 200,
  },

  '@media(max-width: 768px)': {
    margin: 0,
    padding: '$8 $5',
    marginTop: 48,
  },

  '@media(max-width: 360px)': {
    padding: '$8 $2',
  },
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
