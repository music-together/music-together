import React from "react"
import styled from "styled-components"

const HeaderContainer = styled.div`
  position: absolute;
  background-color: transparent;
  width: 100%;
  display: flex;
  align-items: space-between;
  z-index: 10;
`

const LiveIcon = styled.div`
  width: fit-content;
  height: fit-content;
  background-color: #ff3b30;
  color: white;
  text-transform: uppercase;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 12px;
  padding: 2px 6px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  width: 27px;
  height: 11px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 12px;
  margin-right: 33px;
`

const Logo = styled.h1`
  color: white;
`

export function Header() {
  return (
    <HeaderContainer>
      <Logo>MusicTogether</Logo>
      <LiveIcon>Live</LiveIcon>
    </HeaderContainer>
  )
}
