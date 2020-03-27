import React from "react"
import styled from "styled-components"

const P = styled.p`
  font-size: var(--font-size--medium);
  opacity: ${(props) => (props.subdued ? "0.8" : "1")};
`

export function Text({ subdued = false, children }) {
  return <P subdued>{children}</P>
}
