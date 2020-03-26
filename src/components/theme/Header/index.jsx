import React from "react"
import styled from "styled-components"
import logo from "../../../assets/logo.svg"

const HeaderContainer = styled.div`
  background-color: transparent;
  display: flex;
  justify-content: center;
  padding: var(--spacing--base);
`

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="Music together" />
    </HeaderContainer>
  )
}
