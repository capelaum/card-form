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

  transition: '$fast',

  '&:hover:not(:disabled)': {
    opacity: 0.95,
  },

  '&:disabled': {
    cursor: 'not-allowed',
    opacity: 0.5,
  },

  '&:focus': {
    outline: '2px solid $violet3',
    outlineOffset: '2px',
  },
})
