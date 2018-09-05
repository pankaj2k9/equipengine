import React from "react"
import moment from "moment"
import styled from "styled-components"

// sub-components
import Error from "base_components/Error"
import Video from "base_components/Video"
import VideosDropdown from "../VideosDropdown"
import VideoRunningTime from "../VideoRunningTime"

// Video layout
const Layout = styled.div`
  flex-shrink: 0;
  width: 100%;
  height: 360px;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    background: ${props => props.theme.black};
  }
`

class VideosPlayer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentTime: 0,
      currentVideo:
        Array.isArray(props.videos) && props.videos.length !== 0
          ? props.videos[0]
          : null
    }
  }

  handleChangeVideo = ({ video }) => {
    this.setState({
      currentTime: 0,
      currentVideo: video
    })
  }

  handleVideoProgressChange = ({ playedSeconds }) => {
    if (playedSeconds === this.state.currentTime) {
      // Don't update state on all the video changes (onblur, etc.)
      return
    }
    // Copy player current time to this component's current time
    this.setState({
      currentTime: playedSeconds
    })
  }

  render() {
    const { videos } = this.props
    const { currentVideo, currentTime } = this.state

    if (Array.isArray(videos) && videos.length === 0) {
      return <Error>No video found</Error>
    }

    return (
      <Layout>
        <VideosDropdown
          currentVideo={currentVideo}
          videos={videos}
          onChange={this.handleChangeVideo}
        />
        {currentVideo && currentVideo.sproutvideo_id ? (
          <div dangerouslySetInnerHTML={{ __html: currentVideo.embed_code }} />
        ) : (
          <Video
            url={currentVideo && currentVideo.video_link}
            onProgress={this.handleVideoProgressChange}
          />
        )}
        <VideoRunningTime
          // transform the current time of the video in hourly format.
          currentTime={moment()
            .startOf("day")
            .seconds(currentTime)
            .format("H:mm:ss")}
        />
      </Layout>
    )
  }
}

export default VideosPlayer
