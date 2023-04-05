import { createStitches } from '@stitches/react'

export const { styled, getCssText, keyframes, css, globalCss } = createStitches(
  {
    theme: {
      colors: {
        black: 'hsl(0, 0%, 0%)',
        white: 'hsl(0, 0%, 100%)',

        red: 'hsl(0, 100%, 66%)',

        gray1: 'hsl(0, 0%, 87%)',
        gray2: 'hsl(250, 0%, 90%)',
        gray3: 'hsl(262, 5%, 71%)',

        violet1: 'hsl(270, 3%, 87%)',
        violet2: 'hsl(279, 6%, 55%)',
        violet3: 'hsl(250, 28%, 48%)',
        violet9: 'hsl(278, 68%, 11%)',

        'gradient-violet': `linear-gradient(90deg, hsl(249, 99%, 64%) 0%, hsl(278, 94%, 30%) 100%)`,
      },

      fonts: {
        default: "'Space Grotesk', sans-serif",
      },

      space: {
        px: '1px',
        1: '0.25rem',
        2: '0.5rem',
        3: '0.75rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        7: '1.75rem',
        8: '2rem',
        10: '2.5rem',
      },

      fontSizes: {
        xs: '0.75rem',
        sm: '0.875rem',
        md: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
      },

      fontWeights: {
        regular: '400',
        medium: '500',
        bold: '700',
      },

      lineHeights: {
        shorter: '125%',
        short: '140%',
        base: '160%',
        tall: '180%',
      },

      radii: {
        xs: '2.5px',
        sm: '4px',
        md: '8px',
        lg: '16px',
        xl: '24px',
        full: '99999px',
      },

      transitions: {
        default: 'all 0.3s ease-in-out',
        fast: 'all 0.15s ease-in-out',
        slow: 'all 0.45s ease-in-out',
      },
    },

    media: {
      bp1: '(max-width: 768px)',
      bp2: '(max-width: 576px)',
      bp3: '(max-width: 480px)',
    },
  }
)
