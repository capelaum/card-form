import { styled } from '@/styles/stitches.config'

export const TextInputWrapper = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '$1',
  alignItems: 'flex-start',
})

export const Input = styled('input', {
  width: '100%',

  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '$md',
  padding: '$2 $2',

  fontSize: '$md',
  fontWeight: '$medium',
  lineHeight: '$base',

  color: '$violet9',
  backgroundColor: 'transparent',
  border: '1px solid $gray1',

  '&:focus': { border: '1px solid $violet3' },
  '&::selection': {
    border: '1px solid $violet3',
    backgroundColor: '$violet9',
    color: '$white',
  },

  '&::placeholder': { color: '$gray3' },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  variants: {
    hasError: {
      true: {
        border: '1px solid $red',
        '&:focus': { border: '1px solid $red' },
      },
    },
  },
})

export const ErrorMessage = styled('span', {
  fontSize: '$sm',
  lineHeight: '$short',
  color: '$red',
})
