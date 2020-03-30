import React from 'react'
import { ButtonLink } from "./Button"

const paypalURL = 'https://www.paypal.com/donate/?token=A3suGmB-F6r2BDJgJxvevO9dFQ74qROoTa9ttAPgLyC-svBaZ45LsYOcO1wznWwL-sIz1G&country.x=US&locale.x=US'

export const DonateButton = ({text = 'Donate'}) => {
  return (
    <ButtonLink href={paypalURL} target="_blank" rel="noopener noreferrer">
      {text}
    </ButtonLink>
  )
}
