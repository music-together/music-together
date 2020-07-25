import React, { useCallback } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Section from "components/common/Section"
import {DonateButton} from "components/DonateButton"
import { ExternalLink } from "../../ExternalLink"

const FooterWrapper = styled.footer`
  display: grid;
  grid-template-areas: "primary primary primary links social scroll";
  width: 100%;
  max-width: 1200px;
  margin: var(--spacing--base) auto var(--spacing--xloose);
  padding: 0 var(--spacing--tight);

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

const Scroll = styled.div`
  grid-area: scroll;
`

const Social = styled.div`
  grid-area: social;
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
            <DonateButton />
          </ButtonWrapper>
        </Section>
      </Primary>

      <Links>
        <Section>
          <ul>
            <li>
              <Link to="/support">Support the artists</Link>
            </li>
            <li>
              <Link to="/resources">Artist resources</Link>
            </li>
            <li>
              <Link to="/artists">Artist listing</Link>
            </li>
            <li>
              <a
                href="mailto:info@musictogether.ca"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact
              </a>
            </li>
          </ul>
        </Section>
      </Links>

      <Social>
        <Section>
          <ul>
            <li>
              <ExternalLink href={'https://www.instagram.com/MusicTogetherON/'}>Instagram</ExternalLink>
            </li>
            <li>
              <ExternalLink href={'https://www.facebook.com/musictogetherON/'}>Facebook</ExternalLink>
            </li>
            <li>
              <ExternalLink href={'https://twitter.com/MusicTogetherON'}>Twitter</ExternalLink>
            </li>
            <li>
              <ExternalLink href={'https://github.com/music-together/music-together'}>GitHub</ExternalLink>
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
