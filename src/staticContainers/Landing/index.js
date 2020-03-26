import React from "react"
import styled from "styled-components"
import Schedule from "./schedule"

const LandingContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: black;
  background-repeat: no-repeat;
  background-position: top center;
  position: relative;
`

const HeroBlock = styled.div`
  background-color: transparent;
  height: 662px;
  position: relative;
  @media (max-width: 600px) {
    height: 20px;
  }
`

const HeroContainer = styled.div`
  display: flex;
  width: fit-content;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (max-width: 600px) {
    display: none;
  }
`

const HeroPredicateBlock = styled.div`
  background-color: white;
  padding: 6px 10px;
  color: black;
  text-transform: uppercase;
  font-style: normal;
  font-weight: bold;
  font-size: 16.7615px;
  line-height: 20px;
  letter-spacing: 0.12em;
`

const HeroSubjectBlock = styled.div`
  background-color: transparent;
  color: white;
  text-transform: uppercase;
  margin-left: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-style: normal;
  font-weight: bold;
  font-size: 16.7615px;
  line-height: 20px;
  letter-spacing: 0.12em;
`

function LandingPage() {
  return (
    <LandingContainer>
      <HeroBlock>
        <HeroContainer>
          <HeroPredicateBlock>Enjoy</HeroPredicateBlock>
          <HeroSubjectBlock>Local Musicians</HeroSubjectBlock>
        </HeroContainer>
      </HeroBlock>
      <Schedule />
    </LandingContainer>
  )
}

export default LandingPage
