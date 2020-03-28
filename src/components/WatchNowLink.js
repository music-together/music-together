import React from "react"
import { ExternalLink } from "./ExternalLink"
import { Button } from "./Button"
import styled from "styled-components"
import { hasShowStarted } from "../utilities/hasShowStarted"

const WatchNowContainer = styled.div`
  margin-left: auto;
  min-width: 140px;
`

export const WatchNowLink = ({href, showTime}) => {
  if (!href || !hasShowStarted(showTime)) return null;

  return (
    <WatchNowContainer>
      <ExternalLink href={href}>
        <Button>WATCH NOW</Button>
      </ExternalLink>
    </WatchNowContainer>
  )
}

