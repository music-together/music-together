import React from "react"
import styled from "styled-components"

const P = styled.p`
  font-size: ${(props) =>
    ({
      medium: "var(--font-size--medium)",
      large: "var(--font-size--large)",
      xlarge: "var(--font-size--xlarge)",
    }[props.size])};
  opacity: ${(props) => (props.subdued ? "0.8" : "1")};
`

export function Text({ size = "medium", subdued = false, children }) {
  return (
    <P subdued={subdued} size={size}>
      {children}
    </P>
  )
}
