import { BgDesktop, BgMobile, CardBack, CardLogo } from '@/assets'
import { Button } from '@/components/Button'
import { Label } from '@/components/Label'
import { Text } from '@/components/Text'
import { TextInput } from '@/components/TextInput'
import {
  BgImage,
  BgMobileImage,
  CardBackWrapper,
  CardContent,
  CardDetails,
  CardFrontWrapper,
  CardInfo,
  CardLogoImage,
  CardNumber,
  DateField,
  DateInputs,
  FormRow,
  FormWrapper,
  HomeWrapper,
} from '@/styles/home'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Card Form | Frontend Mentor</title>
      </Head>
      <HomeWrapper>
        <BgImage src={BgDesktop} alt="Background with a violet gray gradient" />

        <BgMobileImage
          src={BgMobile}
          alt="Background with a violet gray gradient"
        />

        <CardFrontWrapper>
          <CardContent>
            <CardLogoImage src={CardLogo} alt="Card Logo" />

            <CardDetails>
              <CardNumber size="3xl">0000 0000 0000 0000</CardNumber>

              <CardInfo>
                <Text size="lg">Jane Appleseed</Text>
                <Text size="lg">00/00</Text>
              </CardInfo>
            </CardDetails>
          </CardContent>
        </CardFrontWrapper>

        <CardBackWrapper>
          <Image
            src={CardBack}
            alt="Front of a credit card with a purple gradient"
          />
        </CardBackWrapper>

        <FormWrapper>
          <TextInput
            label="Cardholder Name"
            id="name"
            placeholder="e.g. Jane Appleseed"
          />

          <TextInput
            label="Card Number"
            id="number"
            placeholder="e.g. 1234 5678 9123 0000"
          />

          <FormRow>
            <DateField>
              <Label text="Exp. Date (MM/YY)" htmlFor="month" />
              <DateInputs>
                <TextInput id="month" placeholder="MM" />
                <TextInput id="year" placeholder="YY" />
              </DateInputs>
            </DateField>

            <TextInput label="CVC" id="cvc" placeholder="e.g. 123" />
          </FormRow>

          <Button type="submit">Confirm</Button>
        </FormWrapper>
      </HomeWrapper>
    </>
  )
}
