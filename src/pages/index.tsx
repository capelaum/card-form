import { BgDesktop, BgMobile, CardLogo } from '@/assets'
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
import { zodResolver } from '@hookform/resolvers/zod'
import Head from 'next/head'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const createCardFormSchema = z.object({
  name: z
    .string()
    .nonempty('Cardholder name is required')
    .min(1, {
      message: 'Cardholder name must be at least 1 character',
    })
    .max(255, {
      message: 'Cardholder name must be less than 255 characters',
    }),
  cardNumber: z
    .string()
    .trim()
    .nonempty('Card number is required')
    // remove all spaces
    .transform((value) => value.replace(/\s/g, ''))
    .refine(
      (value) => {
        // ensure that the card number has 16 digits and only numbers
        return value.length === 16 && /^\d+$/.test(value)
      },
      {
        message: 'Card number must have 16 digits',
      }
    ),
  month: z
    .string()
    .nonempty('Expiration month is required')
    .length(2, {
      message: 'Expiration month must have 2 digits',
    })
    .regex(/^(0[1-9]|1[0-2])$/, {
      message: 'Must be between 01 and 12',
    }),
  year: z
    .string()
    .nonempty('Expiration year is required')
    .length(2, {
      message: 'Expiration year must have 2 digits',
    })
    .regex(/^([0-9]{2})$/, {
      message: 'Must be between 00 and 99',
    })
    .refine(
      (value) => {
        const currentYearShort = new Date()
          .getFullYear()
          .toString()
          .substring(2, 4)

        return parseInt(value) >= parseInt(currentYearShort)
      },
      {
        message: 'Expired year',
      }
    ),
  cvc: z
    .string()
    .nonempty('CVC is required')
    .length(3, {
      message: 'CVC must have 3 digits',
    })
    .regex(/^\d+$/, {
      message: 'Wrong format, numbers only',
    }),
})

type CreateCardFormData = z.infer<typeof createCardFormSchema>

const formatCardNumber = (value: string) => {
  return (
    value
      .replace(/\s/g, '')
      // regular expression to match groups of four digits in the input string,
      // and replaces each group with itself ($1) followed by a space
      .replace(/(\d{4})/g, '$1 ')
      // regular expression to match any characters that are not digits or whitespace
      // and removes them from the input string
      .replace(/[^\d\s]/g, '')
      .trim()
      // substring to ensure that the input string is no longer than 19 characters
      .substring(0, 19)
  )
}

const formatMonthOrYear = (value: string) => {
  return value.replace(/[^\d]/g, '').substring(0, 2)
}

const formatCvc = (value: string) => {
  return value.replace(/[^\d]/g, '').substring(0, 3)
}

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateCardFormData>({
    resolver: zodResolver(createCardFormSchema),
  })

  function createCard(data: CreateCardFormData) {
    console.log(data)
  }

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
                <Text size="md">Jane Appleseed</Text>
                <Text size="md">00/00</Text>
              </CardInfo>
            </CardDetails>
          </CardContent>
        </CardFrontWrapper>

        <CardBackWrapper>
          <Text size="md">000</Text>
        </CardBackWrapper>

        <FormWrapper onSubmit={handleSubmit(createCard)}>
          <TextInput
            label="Cardholder Name"
            id="name"
            placeholder="e.g. Jane Appleseed"
            {...register('name')}
            errorMessage={errors.name?.message}
          />

          <TextInput
            label="Card Number"
            id="cardNumber"
            type="tel"
            autoComplete="cc-number"
            placeholder="e.g. 1234 5678 9123 0000"
            {...register('cardNumber')}
            errorMessage={errors.cardNumber?.message}
            onChange={(e) => {
              const { value } = e.target
              e.target.value = formatCardNumber(value)
            }}
          />

          <FormRow>
            <DateField>
              <Label text="Exp. Date (MM/YY)" htmlFor="month" />
              <DateInputs>
                <TextInput
                  id="month"
                  placeholder="MM"
                  {...register('month')}
                  errorMessage={errors.month?.message}
                  onChange={(e) => {
                    const { value } = e.target
                    e.target.value = formatMonthOrYear(value)
                  }}
                />
                <TextInput
                  id="year"
                  placeholder="YY"
                  {...register('year')}
                  errorMessage={errors.year?.message}
                  onChange={(e) => {
                    const { value } = e.target
                    e.target.value = formatMonthOrYear(value)
                  }}
                />
              </DateInputs>
            </DateField>

            <TextInput
              label="CVC"
              id="cvc"
              placeholder="e.g. 123"
              {...register('cvc')}
              errorMessage={errors.cvc?.message}
              onChange={(e) => {
                const { value } = e.target
                e.target.value = formatCvc(value)
              }}
            />
          </FormRow>

          <Button type="submit">Confirm</Button>
        </FormWrapper>
      </HomeWrapper>
    </>
  )
}
