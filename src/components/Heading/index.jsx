import React from "react"
import styled from "styled-components"

const Large = styled.h2`
  font-size: var(--font-size--large);
  font-weight: ${(props) => (props.bold ? "900" : "normal")};
  letter-spacing: 0.07em;
  margin-bottom: var(--spacing--base);
`

const XLarge = styled.h2`
  font-size: var(--font-size--xlarge);
  font-weight: ${(props) => (props.bold ? "700" : "normal")};
`

const Medium = styled.h3`
  font-size: var(--font-size--medium);
  font-weight: 700;
`

const Small = styled.h4`
  font-size: var(--font-size--default);
`

export function Heading({ bold = false, size = "medium", children }) {
  switch (size) {
    case "small": {
      return <Small>{children}</Small>
    }
    case "medium": {
      return <Medium>{children}</Medium>
    }
    case "large": {
      return <Large bold={bold}>{children}</Large>
    }
    case "xlarge": {
      return <XLarge bold={bold}>{children}</XLarge>
    }
    default: {
      return <Medium>{children}</Medium>
    }
  }
}
