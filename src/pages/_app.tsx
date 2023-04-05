import { globalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'
import { Space_Grotesk } from 'next/font/google'

const spaceGrotesk = Space_Grotesk({
  display: 'swap',
  weight: ['400', '500', '700'],
  subsets: ['latin'],
})

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} className={spaceGrotesk.className} />
}
