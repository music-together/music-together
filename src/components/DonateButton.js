import React from 'react'
import { Button } from "./Button"
import { ExternalLink } from "./ExternalLink"

const paypalURL = 'https://www.paypal.com/donate/?token=A3suGmB-F6r2BDJgJxvevO9dFQ74qROoTa9ttAPgLyC-svBaZ45LsYOcO1wznWwL-sIz1G&country.x=US&locale.x=US'

export const DonateButton = ({text = 'Donate'}) => {
  return (
    <ExternalLink href={paypalURL}>
      <Button>{text}</Button>
    </ExternalLink>
  )
}
