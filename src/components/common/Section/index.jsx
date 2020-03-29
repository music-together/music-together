import styled from "styled-components"

const Section = styled.div`
  position: relative;
  padding-top: var(--spacing--base);
  margin-top: var(--spacing--base);
  font-size: var(--font-size--medium);

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: var(--spacing--base);
    border-bottom: ${props => props.noDivider ? "0px solid white;" : "1px solid white;"};
  }
`
export default Section;
