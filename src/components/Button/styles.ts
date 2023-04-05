import { styled } from '@/styles/stitches.config'

export const ButtonStyled = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',

  padding: '$3 $6',
  borderRadius: '$md',

  fontSize: '$lg',
  fontWeight: '$medium',
  lineHeight: '$base',

  color: '$white',
  backgroundColor: '$violet9',

  '&:hover': {
    filter: 'brightness(1.1)',
  },

  '&:disabled': {
    cursor: 'not-allowed',
    filter: 'brightness(0.5)',
  },

  '&:focus': {
    outline: '2px solid $violet3',
  },
})
