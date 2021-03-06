import React from "react"
import "./layout.css"
import styled from "styled-components"
import { Header, Footer } from "components/theme"
import Popup from "components/common/Popup"
import GlobalStore from "../../../stores"
import { useStoreState } from "pullstate";
import backgroundDesktop from "../../../assets/musictogether_background-desktop.png"
import backgroundMobile from "../../../assets/musictogether_background-mobile.png"

const BackgroundContainer = styled.div`
  position: relative;
  z-index: 0;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`

const BackgroundImageContainer = styled.img`
  position: absolute;
  top: 0;
  object-fit: cover;
  width: 100%;
  height: auto;

  max-height: 578px;
  content: url(${backgroundDesktop});
  @media (max-width: 600px) {
    max-height: 368px;
    content: url(${backgroundMobile});
  }
`

const WebContentContainer = styled.div`
  position: absolute;
  z-index: 0;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`

export default function Layout({ children, isHomeScreen }) {
  const isShowing = useStoreState(GlobalStore, s => s.isShowing);
  const popupTitle = useStoreState(GlobalStore, s => s.popupTitle);
  const popupDescription = useStoreState(GlobalStore, s => s.popupDescription);
  return (
    <>
    <BackgroundContainer>
      {isHomeScreen && <BackgroundImageContainer />}
      <WebContentContainer>
        <Header />
        {children}
        <Footer />
      </WebContentContainer>
    </BackgroundContainer>
    <Popup isShowing={isShowing} title={popupTitle} description={popupDescription} />
    </>
  )
}
