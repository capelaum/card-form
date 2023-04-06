import { CardFront } from '@/assets'
import { CardBaseWrapper } from '@/styles/home'
import { styled } from '@/styles/stitches.config'
import { Text } from '../Text'

export const CardFrontWrapper = styled(CardBaseWrapper, {
  top: '50%',
  left: '30%',
  transform: 'translate(-70%, -100%)',
  zIndex: 1,

  backgroundImage: `url(${CardFront.src})`,

  '@media(max-width: 1200px)': {
    transform: 'translate(-65%, -80%) scale(0.65)',
  },

  '@media(max-width: 768px)': {
    left: '50%',
    transform: 'translate(-58%, -108%) scale(0.65)',
  },

  '@media(max-width: 360px)': {
    transform: 'translate(-56%, -115%) scale(0.6)',
  },
})

export const CardFrontContent = styled('div', {
  position: 'absolute',
  zIndex: 1,
  pading: 0,

  width: '100%',
  height: '100%',
  padding: '$6 $8',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
})

export const CardFrontDetails = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '$5',
})

export const CardFrontNumber = styled(Text, {
  letterSpacing: '0.25rem',
})

export const CardFrontInfo = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  gap: '$5',

  span: {
    letterSpacing: '0.15rem',
  },
})

export const CardholderName = styled(Text, {
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  maxWidth: '90%',
})
