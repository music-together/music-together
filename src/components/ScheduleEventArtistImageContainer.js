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

class ScheduleEventArtistImageContainer extends React.Component {
  componentDidMount() {
    setTimeout(function() {
      this.setState({didRefresh: true})
    }.bind(this), 1000)
  }

  render() {
    const { artistImageAlt, artistImageUrl, artistId } = this.props;
    if (!artistImageUrl) {
      return (<></>)
    }

    return (
      <ArtistThumbnailContainer key={artistImageAlt} id={artistImageAlt}>
        <Thumbnail key={artistId} alt={artistImageAlt} src={artistImageUrl} />
      </ArtistThumbnailContainer>
    )
  }
}

export default ScheduleEventArtistImageContainer;
