import { CardLogo } from '@/assets'
import Image from 'next/image'
import { Text } from '../Text'
import {
  CardFrontContent,
  CardFrontDetails,
  CardFrontInfo,
  CardFrontNumber,
  CardFrontWrapper,
  CardholderName,
} from './styles'

interface CardFrontProps {
  cardNumber: string
  cardholderName: string
  month: string
  year: string
}

export function CardFront({
  cardNumber,
  cardholderName,
  month,
  year,
}: CardFrontProps) {
  return (
    <CardFrontWrapper>
      <CardFrontContent>
        <Image src={CardLogo} alt="Card Logo" />

        <CardFrontDetails>
          <CardFrontNumber size="3xl">
            {cardNumber.replace(/(\d{4})/g, '$1 ')}
          </CardFrontNumber>

          <CardFrontInfo>
            <CardholderName size="md">
              {cardholderName.toUpperCase()}
            </CardholderName>

            <Text size="md">
              {month}/{year}
            </Text>
          </CardFrontInfo>
        </CardFrontDetails>
      </CardFrontContent>
    </CardFrontWrapper>
  )
}
