import React from 'react'
import { ButtonLink } from "./Button"

const paypalURL = 'https://www.paypal.me/musictogetherseries'

export const DonateButton = ({text = 'Donate'}) => {
  return (
    <ButtonLink href={paypalURL} target="_blank" rel="noopener noreferrer">
      {text}
    </ButtonLink>
  )
}
