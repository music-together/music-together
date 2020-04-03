import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { Heading, Text } from "components"
import Schedule from "./schedule"
import Sponsors from "components/Sponsors"

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
  padding-bottom: var(--spacing--xtight);
`

const ActionWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-left: calc(-1 * var(--spacing--base));

  & > * {
    margin-left: var(--spacing--base);
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
          <Text>A living room concert series to pay artists in need</Text>
        </TextWrapper>

        <ActionWrapper>
          <Action to="/artist-apply">Apply to perform</Action>
          <Action to="/support">Support the artists</Action>
        </ActionWrapper>
      </HeroContainer>
      <Schedule />
      <Sponsors />
    </>
  )
}

export default LandingPage
