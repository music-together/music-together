import React from "react"
import styled from "styled-components"
import logo from "../../../assets/logo.svg"

const HeaderContainer = styled.div`
  position: absolute;
  background-color: transparent;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: var(--spacing--base);
  z-index: 10;
`

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="Music together" />
    </HeaderContainer>
  )
}
