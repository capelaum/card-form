import { FormWrapper } from '@/styles/home'
import { styled } from '@/styles/stitches.config'

export const SubmittedWrapper = styled(FormWrapper, {
  alignItems: 'center',
  gap: '$8',

  h2: {
    letterSpacing: '0.15rem',
  },

  span: {
    color: '$violet2',
  },

  button: {
    width: '100%',
  },
})

export const SubmitMessage = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '$4',
})
