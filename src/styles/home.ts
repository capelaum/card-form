import { CardBack } from '@/assets'
import Image from 'next/image'
import { styled } from './stitches.config'

export const HomeWrapper = styled('main', {
  display: 'flex',
  height: '100%',
  overflow: 'hidden',
  position: 'relative',

  '@media(max-width: 768px)': {
    flexDirection: 'column',
    alignItems: 'center',
  },
})

export const BgImage = styled(Image, {
  minHeight: '100vh',
  width: '30%',
  minWidth: 200,
  objectFit: 'cover',

  '@media(max-width: 768px)': {
    display: 'none',
  },
})

export const BgMobileImage = styled(Image, {
  display: 'none',
  objectFit: 'cover',

  '@media(max-width: 768px)': {
    display: 'block',
    width: '100%',
  },
})

export const CardBaseWrapper = styled('div', {
  position: 'absolute',
  width: 460,
  height: 252,
  color: '$white',

  backgroundSize: 'contain',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
})

export const CardBackWrapper = styled(CardBaseWrapper, {
  top: '50%',
  left: '30%',
  transform: 'translate(-50%, 10%)',

  backgroundImage: `url(${CardBack.src})`,

  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',

  span: {
    marginRight: 56,
    letterSpacing: '0.1rem',
  },

  '@media(max-width: 1200px)': {
    transform: 'translate(-50%, -10%) scale(0.65)',
  },

  '@media(max-width: 768px)': {
    left: '50%',
    top: 40,
    transform: 'translate(-45%, -20%) scale(0.65)',
  },

  '@media(max-width: 360px)': {
    transform: 'translate(-44%, -25%) scale(0.6)',
  },
})
