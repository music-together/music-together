import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { Heading, Text } from "components"
import Schedule from "./schedule"

const HeroContainer = styled.div`
  text-align: center;
  margin: var(--spacing--tight) var(--spacing--xtight) var(--spacing--loose);

  & h2 {
    line-height: 1.2em;
  }
`

const Action = styled(Link)`
  font-size: var(--font-size--medium);
  text-decoration: underline;
  text-transform: uppercase;

  &:first-of-type {
    margin-right: var(--spacing--base);
  }
`

const TextWrapper = styled.div`
  max-width: 500px;
  margin: var(--spacing--tight) auto var(--spacing--base);
`

function LandingPage() {
  return (
    <>
      <HeroContainer>
        <Heading size="xlarge" bold>
          Support Ontario artists without leaving home
        </Heading>
        <TextWrapper>
          <Text>
            A living room concert series to pay artists in need
          </Text>
        </TextWrapper>

        <Action to="/artist-apply">Apply to perform</Action>
        <Action to="/support">Support the artists</Action>
      </HeroContainer>
      <Schedule />
    </>
  )
}

export default LandingPage
