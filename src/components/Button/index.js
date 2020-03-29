import styled from "styled-components"

export const Button = styled.button`
  height: 54px;
  border: 1px solid #ffffff;
  box-sizing: border-box;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  background: none;
  padding: 0;
  cursor: pointer;
  outline: inherit;

  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 18px;

  text-align: center;

  &:hover {
    background: white;
    color: black;
  }
`
