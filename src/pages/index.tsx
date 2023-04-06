import { BgDesktop, BgMobile } from '@/assets'
import { CardForm } from '@/components/CardForm'
import { CardFront } from '@/components/CardFront'
import { SubmittedState } from '@/components/SubmittedState'
import { Text } from '@/components/Text'
import {
  BgImage,
  BgMobileImage,
  CardBackWrapper,
  HomeWrapper,
} from '@/styles/home'
import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
  const [cardNumber, setCardNumber] = useState('0000 0000 0000 0000')
  const [cardholderName, setCardholderName] = useState('Jane Appleseed')
  const [month, setMonth] = useState('00')
  const [year, setYear] = useState('00')
  const [cvc, setCvc] = useState('000')

  const [isSubmitted, setIsSubmitted] = useState(false)

  return (
    <>
      <Head>
        <title>Card Form | Frontend Mentor</title>
      </Head>
      <HomeWrapper>
        <BgImage
          src={BgDesktop}
          alt="Background with a violet gray gradient"
          priority
        />

        <BgMobileImage
          src={BgMobile}
          alt="Background with a violet gray gradient"
          priority
        />

        <CardFront
          cardNumber={cardNumber}
          cardholderName={cardholderName}
          month={month}
          year={year}
        />

        <CardBackWrapper>
          <Text size="md">{cvc}</Text>
        </CardBackWrapper>

        {isSubmitted ? (
          <SubmittedState setIsSubmitted={setIsSubmitted} />
        ) : (
          <CardForm
            setCardNumber={setCardNumber}
            setCardholderName={setCardholderName}
            setCvc={setCvc}
            setMonth={setMonth}
            setYear={setYear}
            setIsSubmitted={setIsSubmitted}
          />
        )}
      </HomeWrapper>
    </>
  )
}
