import React from "react"
import PropTypes from "prop-types"
import ReactPlayer from "react-player"

import { Desktop, Mobile } from "base_components/Responsive"

const Video = ({ url, onProgress }) => (
  <React.Fragment>
    <Desktop>
      <ReactPlayer controls url={url} width={520} onProgress={onProgress} />
    </Desktop>
    <Mobile>
      <ReactPlayer
        controls
        url={url}
        playsinline
        width="100%"
        onProgress={onProgress}
      />
    </Mobile>
  </React.Fragment>
)

Video.propTypes = {
  url: PropTypes.string,
  onProgress: PropTypes.func.isRequired
}

export default Video
