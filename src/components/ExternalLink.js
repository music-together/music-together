import React from 'react'

const addHttpsIfNeeded = (link) => (link.indexOf("http") !== -1) ? link : `https://${link}`

export const ExternalLink = ({href, children}) => {
  if (!href) return null;
  return <a href={addHttpsIfNeeded(href)} target="_blank" rel="noopener noreferrer">{children}</a>
}
