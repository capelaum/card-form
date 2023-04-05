import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Card Form | Frontend Mentor</title>
      </Head>
      <main>
        <h1>Hello Card Form</h1>
      </main>
    </>
  )
}
