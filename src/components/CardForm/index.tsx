import { zodResolver } from '@hookform/resolvers/zod'
import { ChangeEvent, Dispatch, SetStateAction } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '../Button'
import { Label } from '../Label'
import { TextInput } from '../TextInput'
import { CardFormWrapper, DateField, DateInputs, FormRow } from './styles'

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
  return value
    .replace(/\s/g, '')
    .replace(/(\d{4})/g, '$1 ')
    .replace(/[^\d\s]/g, '')
    .trim()
    .substring(0, 19)
}

const formatMonthOrYear = (value: string) => {
  return value.replace(/[^\d]/g, '').substring(0, 2)
}

const formatCvc = (value: string) => {
  return value.replace(/[^\d]/g, '').substring(0, 3)
}

interface CardFormProps {
  setCardholderName: Dispatch<SetStateAction<string>>
  setCardNumber: Dispatch<SetStateAction<string>>
  setMonth: Dispatch<SetStateAction<string>>
  setYear: Dispatch<SetStateAction<string>>
  setCvc: Dispatch<SetStateAction<string>>
  setIsSubmitted: Dispatch<SetStateAction<boolean>>
}

export function CardForm({
  setCardholderName,
  setCardNumber,
  setMonth,
  setYear,
  setCvc,
  setIsSubmitted,
}: CardFormProps) {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CreateCardFormData>({
    resolver: zodResolver(createCardFormSchema),
  })

  function resetForm() {
    reset()
    setCardholderName('Jane Appleseed')
    setCardNumber('0000 0000 0000 0000')
    setMonth('00')
    setYear('00')
    setCvc('000')
  }

  function createCard(data: CreateCardFormData) {
    console.log(data)
    setIsSubmitted(true)
    reset()
  }

  function handleCardholderNameChange(e: ChangeEvent<HTMLInputElement>) {
    setCardholderName(e.target.value === '' ? 'Jane Appleseed' : e.target.value)
  }

  function handleCardNumberChange(e: ChangeEvent<HTMLInputElement>) {
    e.target.value = formatCardNumber(e.target.value)
    setCardNumber(
      e.target.value === '' ? '0000 0000 0000 0000' : e.target.value
    )
  }

  function handleMonthChange(e: ChangeEvent<HTMLInputElement>) {
    e.target.value = formatMonthOrYear(e.target.value)
    setMonth(e.target.value === '' ? '00' : e.target.value)
  }

  function handleYearChange(e: ChangeEvent<HTMLInputElement>) {
    e.target.value = formatMonthOrYear(e.target.value)
    setYear(e.target.value === '' ? '00' : e.target.value)
  }

  function handleCvcChange(e: ChangeEvent<HTMLInputElement>) {
    e.target.value = formatCvc(e.target.value)
    setCvc(e.target.value === '' ? '000' : e.target.value)
  }

  return (
    <CardFormWrapper onSubmit={handleSubmit(createCard)}>
      <TextInput
        label="Cardholder Name"
        id="name"
        placeholder="e.g. Jane Appleseed"
        {...register('name')}
        errorMessage={errors.name?.message}
        onChange={handleCardholderNameChange}
      />

      <TextInput
        label="Card Number"
        id="cardNumber"
        type="tel"
        autoComplete="cc-number"
        placeholder="e.g. 1234 5678 9123 0000"
        {...register('cardNumber')}
        errorMessage={errors.cardNumber?.message}
        onChange={handleCardNumberChange}
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
              onChange={handleMonthChange}
            />
            <TextInput
              id="year"
              placeholder="YY"
              {...register('year')}
              errorMessage={errors.year?.message}
              onChange={handleYearChange}
            />
          </DateInputs>
        </DateField>

        <TextInput
          label="CVC"
          id="cvc"
          placeholder="e.g. 123"
          {...register('cvc')}
          errorMessage={errors.cvc?.message}
          onChange={handleCvcChange}
        />
      </FormRow>

      <Button type="submit" disabled={isSubmitting}>
        Confirm
      </Button>
    </CardFormWrapper>
  )
}
