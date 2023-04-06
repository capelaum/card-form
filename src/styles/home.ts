import { CardFront } from '@/assets'
import { Text } from '@/components/Text'
import Image from 'next/image'
import { styled } from './stitches.config'

export const HomeWrapper = styled('main', {
  display: 'flex',
  height: '100%',
  overflow: 'hidden',
  position: 'relative',

  '@media(max-width: 1200px)': {
    flexDirection: 'column',
    alignItems: 'center',
  },
})

export const BgImage = styled(Image, {
  minHeight: '100vh',
  width: '30%',
  minWidth: 200,
  objectFit: 'cover',

  '@media(max-width: 1200px)': {
    display: 'none',
  },
})

export const BgMobileImage = styled(Image, {
  display: 'none',
  objectFit: 'cover',

  '@media(max-width: 1200px)': {
    display: 'block',
    width: '100%',
  },
})

export const CardFrontWrapper = styled('div', {
  position: 'absolute',
  top: '50%',
  left: '30%',
  transform: 'translate(-70%, -100%)',
  zIndex: 1,

  color: '$white',

  border: '1px solid red',

  width: 460,
  height: 252,

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  backgroundSize: 'contain',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundImage: `url(${CardFront.src})`,

  '@media(max-width: 1200px)': {
    left: '50%',
    transform: 'translate(-55%, -115%) scale(0.65)',
  },

  '@media(max-width: 360px)': {
    transform: 'translate(-55%, -115%) scale(0.6)',
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

  border: '1px solid blue',

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
})

export const CardBackWrapper = styled('div', {
  position: 'absolute',
  top: '50%',
  left: '30%',
  transform: 'translate(-50%, 10%)',

  '@media(max-width: 1200px)': {
    left: '50%',
    top: 40,
    transform: 'translate(-45%, -20%) scale(0.65)',
  },

  '@media(max-width: 360px)': {
    transform: 'translate(-45%, -20%) scale(0.6)',
  },
})

export const FormWrapper = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '$5',
  margin: '$10 $5',
  marginLeft: 320,

  maxWidth: 450,

  button: {
    marginTop: '$3',
  },

  '@media(max-width: 1200px)': {
    margin: 0,
    padding: '$8 $5',
    marginTop: 48,
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
