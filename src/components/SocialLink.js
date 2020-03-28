import React from 'react'
import styled from "styled-components"
import { FaSpotify, FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaApple } from 'react-icons/fa';

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
  }, 'twitter')
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
    default:
      return <FaTwitter {...iconProps} />
  }
}

const IconLink = styled.a`
  display: inline-block;
  margin: 1em;
`

const addHttpsIfNeeded = (link) => (link.indexOf("http") !== -1) ? link : `https://${link}`

const SocialIcon = ({link, type}) => (
  <IconLink href={addHttpsIfNeeded(link)} target="_blank" rel="noopener">
    <UntyledSocialIcon type={type} />
  </IconLink>
)
