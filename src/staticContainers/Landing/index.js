import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { Text } from "components"
import Schedule from "./schedule"
import Sponsors from "components/Sponsors"

const HeroContainer = styled.div`
  text-align: center;
  margin: var(--spacing--tight) var(--spacing--xtight) var(--spacing--loose);

  min-height: 327px;
  @media (max-width: 600px) {
    min-height: 117px;
  }

  & h2 {
    line-height: 1.2em;
  }
`

const Action = styled(Link)`
  font-size: var(--font-size--medium);
  text-decoration: none;
  padding-bottom: var(--spacing--base);
  color: #FF842C;

  @media (max-width: 600px) {
    padding-bottom: var(--spacing--xtight);
  }
`

const ActionWrapper = styled.div`
  display: grid;
  margin-left: calc(-1 * var(--spacing--base));

  & > * {
    margin-left: var(--spacing--base);
  }

  @media (max-width: 600px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`

const HomePageTitle = styled.div`
  font-size: var(--font-size--xlarge);
  font-weight: 700;
  max-width: 522px;
  margin: 0 auto;
  line-height: 39px;
`

const TextWrapper = styled.div`
  max-width: 500px;
  margin: var(--spacing--base) auto var(--spacing--base);
`

function LandingPage() {
  return (
    <>
      <HeroContainer>
        <HomePageTitle>
          Support Ontario artists without leaving home
        </HomePageTitle>
        <TextWrapper>
          <Text>A living room concert series to pay artists in need</Text>
        </TextWrapper>

        <ActionWrapper>
          <Action to="/support">Support the artists</Action>
        </ActionWrapper>
      </HeroContainer>
      <Schedule />
      <Sponsors />
    </>
  )
}

export default LandingPage
