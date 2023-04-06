import { CardBack, CardFront } from '@/assets'
import { Text } from '@/components/Text'
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

export const CardFrontImage = styled(Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
})

export const CardLogoImage = styled(Image, {})

export const CardContent = styled('div', {
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

export const CardDetails = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '$5',
})

export const CardNumber = styled(Text, {
  letterSpacing: '0.25rem',
})

export const CardInfo = styled('div', {
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

export const FormWrapper = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '$5',

  margin: '$10 $5',
  marginLeft: 350,

  maxWidth: 450,

  button: {
    marginTop: '$3',
  },

  '@media(max-width: 1200px)': {
    marginLeft: 250,
  },

  '@media(max-width: 800px)': {
    marginLeft: 200,
  },

  '@media(max-width: 768px)': {
    margin: 0,
    padding: '$8 $5',
    marginTop: 48,
  },

  '@media(max-width: 360px)': {
    padding: '$8 $2',
  },
})

export const DateField = styled('fieldset', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  border: 'none',
  gap: '$1',
})

export const DateInputs = styled('div', {
  display: 'flex',
  gap: '$2',
})

export const FormRow = styled('div', {
  width: '100%',
  display: 'flex',
  gap: '$6',
})
