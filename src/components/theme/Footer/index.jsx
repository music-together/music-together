import React, { useCallback } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { Button } from "components"
import Section from "components/common/Section"

const FooterWrapper = styled.footer`
  display: grid;
  grid-template-areas: "primary primary primary links social scroll";
  width: 100%;
  max-width: 1200px;
  margin: var(--spacing--base) auto var(--spacing--xloose);

  @media screen and (max-width: 800px) {
    grid-template-areas: "primary" "links" "social" "scroll";
  }
`

const SubduedHeading = styled.h3`
  color: var(--text-color--subdued);
  font-weight: 400;
`

const ButtonWrapper = styled.div`
  max-width: 300px;
  margin-top: var(--spacing--base);
`

const ScrollToTop = styled.button`
  background: transparent;
  font-size: var(--font-size--base);
  border: none;
  color: var(--text-color--subdued);
  cursor: pointer;

  &:hover {
    color: var(--text-color);
  }
`

const Primary = styled.div`
  grid-area: primary;
`

const Links = styled.div`
  grid-area: links;
`

const Social = styled.div`
  grid-area: social;
`

const Scroll = styled.div`
  grid-area: scroll;
`

export function Footer() {
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  return (
    <FooterWrapper>
      <Primary>
        <Section>
          <SubduedHeading>Made by artists, for artists.</SubduedHeading>
          <ButtonWrapper>
            <Button>Donate</Button>
          </ButtonWrapper>
        </Section>
      </Primary>

      <Links>
        <Section>
          <ul>
            <li>
              <Link to="/artist-apply">Apply to perform</Link>
            </li>
            <li>
              <Link to="#">Sponsors</Link>
            </li>
            <li>
              <Link to="#">Artist resources</Link>
            </li>
            <li>
              <Link to="/artists">Artist listing</Link>
            </li>
            <li>
              <Link to="#">Shop</Link>
            </li>
          </ul>
        </Section>
      </Links>

      <Social>
        <Section>
          <ul>
            <li>
              <Link to="#">Instagram</Link>
            </li>
            <li>
              <Link to="#">Facebook</Link>
            </li>
            <li>
              <Link to="#">Twitter</Link>
            </li>
          </ul>
        </Section>
      </Social>

      <Scroll>
        <Section>
          <ScrollToTop onClick={scrollToTop}>↑</ScrollToTop>
        </Section>
      </Scroll>
    </FooterWrapper>
  )
}
