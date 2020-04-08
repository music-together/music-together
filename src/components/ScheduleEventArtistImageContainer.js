import React from "react"
import styled from "styled-components"

const ArtistThumbnailContainer = styled.div`
  flex-shrink: 0;
  margin-right: var(--spacing--tight);
  height: 100px;
  width: 100px;

  @media (max-width: 600px) {
    width: 50px;
    height: 50px;
  }
`

const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export default ({ artistImageAlt, artistImageUrl }) => {
    if (!artistImageUrl) {
      console.log(`Null image for ${artistImageAlt}`);
      return (<></>)
    }

    console.log(`Image for ${artistImageAlt} = ${artistImageUrl}`);

    return (
      <ArtistThumbnailContainer>
        <Thumbnail alt={artistImageAlt} src={artistImageUrl} />
      </ArtistThumbnailContainer>
    )
}
