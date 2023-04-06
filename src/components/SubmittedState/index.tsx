import { IconComplete } from '@/assets'
import Image from 'next/image'
import { Dispatch, SetStateAction } from 'react'
import { Button } from '../Button'
import { Text } from '../Text'
import { SubmitMessage, SubmittedWrapper } from './styles'

interface SubmittedStateProps {
  setIsSubmitted: Dispatch<SetStateAction<boolean>>
}

export function SubmittedState({ setIsSubmitted }: SubmittedStateProps) {
  return (
    <SubmittedWrapper>
      <Image
        src={IconComplete}
        alt="White check icon with a violet gray gradient background"
      />

      <SubmitMessage>
        <Text size="xl" as="h2">
          THANK YOU
        </Text>

        <Text>We&apos;ve added your card details</Text>
      </SubmitMessage>

      <Button onClick={() => setIsSubmitted(false)}>Continue</Button>
    </SubmittedWrapper>
  )
}
