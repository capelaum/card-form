import { BgDesktop } from '@/assets'
import { Button } from '@/components/Button'
import { Label } from '@/components/Label'
import { TextInput } from '@/components/TextInput'
import {
  DateField,
  DateInputs,
  FormRow,
  FormWrapper,
  HomeWrapper,
  ImageWrapper,
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
        <ImageWrapper>
          <Image src={BgDesktop} alt="Background with a violet gray gradient" />
        </ImageWrapper>

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
