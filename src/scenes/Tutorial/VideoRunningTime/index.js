import React from "react"
import PropTypes from "prop-types"

import Media from "react-media"
import VideoBox from "../VideoBox"

const VideoRunningTime = ({ currentTime }) => {
  const { infoRunningTime, infoCurrentTime, boxInfo } = videoRunningTimeStyle

  return (
    <Media query="(max-width: 767px)">
      {matches =>
        matches ? (
          <VideoBox>
            <div>
              <span style={infoRunningTime}>Running Time</span>
              <p style={infoCurrentTime}>{currentTime}</p>
            </div>
          </VideoBox>
        ) : (
          <VideoBox style={boxInfo.desktopViewport}>
            <div style={{ textAlign: "right" }}>
              <span
                style={{
                  ...infoRunningTime,
                  ...infoRunningTime.desktopViewport
                }}
              >
                Running Time
              </span>
              <p
                style={{
                  ...infoCurrentTime,
                  ...infoCurrentTime.desktopViewport
                }}
              >
                {currentTime}
              </p>
            </div>
          </VideoBox>
        )
      }
    </Media>
  )
}

const videoRunningTimeStyle = {
  infoRunningTime: {
    fontSize: 10,
    color: "#4e4e4e",
    desktopViewport: {
      color: "#ffffff"
    }
  },
  infoCurrentTime: {
    fontSize: 14,
    marginBottom: 0,
    desktopViewport: {
      color: "#ffffff",
      textAlign: "right",
      paddingRight: "1em"
    }
  },
  boxInfo: {
    desktopViewport: {
      flexDirection: "column",
      justifyContent: "flex-end",
      marginBottom: "1.1em"
    }
  }
}

VideoRunningTime.propTypes = {
  currentTime: PropTypes.string.isRequired
}

export default VideoRunningTime
