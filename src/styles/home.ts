import Image from 'next/image'
import { styled } from './stitches.config'

export const HomeWrapper = styled('main', {
  display: 'flex',
  height: '100%',
  overflow: 'hidden',
  position: 'relative',

  '@media(max-width: 1200px)': {
    flexDirection: 'column',
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

export const CardFrontImage = styled(Image, {
  position: 'absolute',
  top: '50%',
  left: '30%',
  transform: 'translate(-70%, -100%)',
  zIndex: 1,

  '@media(max-width: 1200px)': {
    left: '50%',
    transform: 'translate(-55%, -115%) scale(0.65)',
  },

  '@media(max-width: 360px)': {
    transform: 'translate(-55%, -115%) scale(0.6)',
  },
})

export const CardBackImage = styled(Image, {
  position: 'absolute',
  top: '50%',
  left: '30%',
  transform: 'translate(-50%, 10%)',

  '@media(max-width: 1200px)': {
    left: '50%',
    top: 32,
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
  marginLeft: 340,

  maxWidth: '400px',

  button: {
    marginTop: '$3',
  },

  '@media(max-width: 1200px)': {
    margin: 0,
    width: '100%',
    maxWidth: '100%',
    padding: '$8 $5',
    marginTop: 64,
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
