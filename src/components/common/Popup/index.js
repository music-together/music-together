import React from "react"
import styled from "styled-components"
import { MdClose } from 'react-icons/md';
import GlobalStore from "../../../stores"

const PopupBox = styled.div`
  position: fixed;
  width: 375px;
  background: white;
  padding: 20px;
  border-radius: 4px;
  z-index: 101;

  margin: auto;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);

  @media (max-width: 600px) {
    border-radius: 0px;
    bottom: 0;
    transform: none;
    width: 100%;
    top: auto;
  }
`

const PopupContentContainer = styled.div`
  position: fixed;
  z-index: 100;
  top: 0px;
  bottom: 0px;
  left: 0;
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.5;
`
const TitleText = styled.div`
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 19px;
  line-height: 136.2%;
  letter-spacing: 0.03em;

  color: #000000;
`

const MessageText = styled.div`
  margin-top: 10px;

  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 136.2%;
  letter-spacing: 0.03em;

  color: #000000;
`

const TitleContainer = styled.div`
`

const CloseButton = styled.button`
  border: 0px;
  box-sizing: border-box;
  background: white;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
`

class Popup extends React.Component {
  render() {
    if (!this.props.isShowing) {
      return (<></>);
    }
    const title = "Sponsors";
    const message = "\"Sponsored\" means that either an artist donated their performance to the cause or a generous entity paid an artist directly in support of the cause! This means they're not taking a fee from MusicTogether, they are helping to increase awareness and donations.";

    const hidePopup = (e) => {
      GlobalStore.update(s => { s.isShowing = false; })
    };

    return (
      <>
      <PopupContentContainer/>
      <PopupBox>
        <TitleContainer>
          <TitleText>{title}</TitleText>
          <CloseButton onClick={hidePopup}>
            <MdClose />
          </CloseButton>
        </TitleContainer>
        <MessageText>{message}</MessageText>
      </PopupBox>
      </>
    )
  }
}

export default Popup;
