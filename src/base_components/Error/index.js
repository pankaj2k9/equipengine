import React from "react"
import MediaQuery from "react-responsive"

import Box from "base_components/Box"

const Error = ({ children }) => {
  const headlineStyle = {
    fontSize: "1.2rem",
    textAlign: "center",
    fontFamily: "Avenir Next",
    fontWeight: 500
  }

  return (
    <Box>
      <MediaQuery query="(max-width: 767px)">
        <h3 style={headlineStyle}>{children}</h3>
      </MediaQuery>
      <MediaQuery query="(min-width: 768px)">
        <h3
          style={{
            ...headlineStyle,
            marginTop: "2em",
            fontSize: "1.5rem"
          }}
        >
          {children}
        </h3>
      </MediaQuery>
    </Box>
  )
}

export default Error
