import React from 'react';
import styled from 'styled-components'

const HeaderContainer = styled.div`
  background-color: transparent;
  width: 100%;
  display: flex;
  position: relative;
`

const MusicIcon = styled.img`
  width: 14.56px;
  height: 15px;
  margin-left: 33px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`

const LiveIcon = styled.div`
  width: fit-content;
  height: fit-content;
  background-color: #FF3B30;
  color: white;
  text-transform: uppercase;
  font-family: SF Pro Text;
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

const AppIcon = styled.img`
  margin: auto;
`

function Header() {
  return (
    <HeaderContainer>
        <MusicIcon src="./music-icon.svg"/>
        <AppIcon src="./app-icon.svg"/>
        <LiveIcon>Live</LiveIcon>
    </HeaderContainer>
  );
}

export default Header;
