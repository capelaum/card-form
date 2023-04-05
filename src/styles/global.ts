import { globalCss } from './stitches.config'

export const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
  },

  html: {
    scrollBehavior: 'smooth',
  },

  body: {
    fontFamily: '$default',
    fontSize: '$lg',
    fontWeight: '$medium',
    lineHeight: '$base',

    color: '$violet9',
    backgroundColor: '$white',

    '-webkit-font-smoothing': 'antialiased',
  },

  'a, button': {
    cursor: 'pointer',
    border: 'none',

    '&:disabled': {
      cursor: 'not-allowed',
    },
  },
})
