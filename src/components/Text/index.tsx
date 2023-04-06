import { styled } from '@/styles/stitches.config'
import { type ComponentProps, type ElementType } from 'react'

export interface TextProps extends ComponentProps<typeof Text> {
  as?: ElementType
}

export const Text = styled('span', {
  fontFamily: '$default',
  lineHeight: '$base',

  variants: {
    size: {
      xs: { fontSize: '$xs' },
      sm: { fontSize: '$sm' },
      md: { fontSize: '$md' },
      lg: { fontSize: '$lg' },
      xl: { fontSize: '$xl' },
      '2xl': { fontSize: '$2xl' },
      '3xl': { fontSize: '1.75rem' },
    },

    weight: {
      regular: { fontWeight: '$regular' },
      medium: { fontWeight: '$medium' },
      bold: { fontWeight: '$bold' },
    },
  },

  defaultVariants: {
    size: 'md',
    weight: 'normal',
  },
})

Text.displayName = 'Text'
