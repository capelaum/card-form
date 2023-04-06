import { IconComplete } from '@/assets'
import Image from 'next/image'
import { Dispatch, SetStateAction } from 'react'
import { Button } from '../Button'
import { Text } from '../Text'
import { SubmitMessage, SubmittedWrapper } from './styles'

interface SubmittedStateProps {
  setIsSubmitted: Dispatch<SetStateAction<boolean>>
  resetCardData: () => void
}

export function SubmittedState({
  setIsSubmitted,
  resetCardData,
}: SubmittedStateProps) {
  function handleContinue() {
    setIsSubmitted(false)
    resetCardData()
  }

  return (
    <SubmittedWrapper as="div">
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

      <Button onClick={handleContinue}>Continue</Button>
    </SubmittedWrapper>
  )
}
