import React from "react"
import styled from "styled-components"

const P = styled.p`
  font-size: var(--font-size--medium);
`

export function Text({ children }) {
  return <P>{children}</P>
}
