import React from "react"
import PropTypes from "prop-types"
import Media from "react-media"

import Box from "base_components/Box"

const ModalBoxVideoInfo = ({ style, children }) => (
  <Media query="(max-width: 767px)">
    {matches =>
      matches ? (
        <Box
          style={{
            ...modalBoxVideoInfoStyle,
            ...style
          }}
        >
          {children}
        </Box>
      ) : (
        <Box
          style={{
            ...style,
            ...modalBoxVideoInfoStyle.desktopViewport
          }}
        >
          {children}
        </Box>
      )
    }
  </Media>
)

// styles
const modalBoxVideoInfoStyle = {
  width: "50%",
  float: "left",
  marginTop: "0.5em",
  desktopViewport: {
    width: "25%"
  }
}

ModalBoxVideoInfo.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ]),
  style: PropTypes.object
}

export default ModalBoxVideoInfo
