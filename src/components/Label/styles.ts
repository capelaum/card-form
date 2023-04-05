import { styled } from '@/styles/stitches.config'
import * as Label from '@radix-ui/react-label'

export const LabelRoot = styled(Label.Root, {
  fontSize: '$sm',
  fontWeight: '$medium',
  color: '$violet9',
  textTransform: 'uppercase',
  letterSpacing: '0.1rem',

  '&:hover': {
    cursor: 'pointer',
  },
})
