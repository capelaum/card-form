import { BgDesktop, BgMobile, CardBack, CardFront } from '@/assets'
import { Button } from '@/components/Button'
import { Label } from '@/components/Label'
import { TextInput } from '@/components/TextInput'
import {
  BgImage,
  BgMobileImage,
  CardBackImage,
  CardFrontImage,
  DateField,
  DateInputs,
  FormRow,
  FormWrapper,
  HomeWrapper,
} from '@/styles/home'
import Head from 'next/head'

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

        <CardFrontImage
          src={CardFront}
          alt="Front of a credit card with a purple gradient"
        />

        <CardBackImage
          src={CardBack}
          alt="Front of a credit card with a purple gradient"
        />

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
