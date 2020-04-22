import React from 'react'
import styled from "styled-components"
import { FaSpotify, FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaApple, FaLink, FaPatreon, FaShoppingCart } from 'react-icons/fa';
import { ExternalLink } from "./ExternalLink"

const IconMapper = {
  'twitter': /twitter/,
  'facebook': /facebook/,
  'instagram': /instagram/,
  'spotify': /spotify/,
  'youtube':/youtube/,
}

const guessMediaType = link => {
  return Object.entries(IconMapper).reduce((previous, [mediaType, regex]) => {
    return regex.test(link)
      ? mediaType
      : previous;
  }, 'unknown')
}

export const SocialLink = ({link, type = guessMediaType(link)}) => {
  if (!link) return null;

  return (
    <SocialIcon link={link} type={type} />
  )
}

const UntyledSocialIcon = ({type}) => {
  const iconProps = {size: '2em'}

  switch (type.toLowerCase()) {
    case 'twitter':
      return <FaTwitter {...iconProps} />
    case 'spotify':
      return <FaSpotify {...iconProps} />
    case 'facebook':
      return <FaFacebook {...iconProps}  />
    case 'instagram':
      return <FaInstagram {...iconProps} />
    case 'youtube':
      return <FaYoutube {...iconProps} />
    case 'apple':
      return <FaApple {...iconProps} />
    case 'patreon':
      return <FaPatreon {...iconProps} />
    case 'store':
      return <FaShoppingCart {...iconProps} />
    default:
      return <FaLink {...iconProps} />
  }
}

const IconContainer = styled.div`
  display: inline-block;
  margin: 1em;
`

const SocialIcon = ({ link, type }) => (
  <IconContainer>
    <ExternalLink href={link}>
      <UntyledSocialIcon type={type} />
    </ExternalLink>
  </IconContainer>
)
