import { styled } from '@/styles/stitches.config'

export const SubmittedWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '$8',

  margin: '$10 $5',
  marginLeft: 350,

  width: '100%',
  maxWidth: 450,
  border: '1px solid red',

  h2: {
    letterSpacing: '0.15rem',
  },

  span: {
    color: '$violet2',
  },

  button: {
    marginTop: '$3',
    width: '100%',
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

export const SubmitMessage = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '$4',
})
