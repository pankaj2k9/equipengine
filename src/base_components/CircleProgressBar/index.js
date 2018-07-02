import React from "react"
import CircularProgressbar from "react-circular-progressbar"
import styled from "styled-components"
import "react-circular-progressbar/dist/styles.css"

const CircleProgressBar = ({
  className,
  small,
  percentage,
  text,
  textColor,
  strokeWidth,
  ...rest
}) => (
  <div className={className}>
    <CircularProgressbar
      initialAnimation
      percentage={percentage || 0}
      text={text}
      strokeWidth={strokeWidth}
      styles={{
        path: { stroke: "#338ffc" },
        text: { fill: textColor || "#979797", fontSize: "14px" }
      }}
      {...rest}
    />
  </div>
)

export default styled(CircleProgressBar)`
  margin: 5px;
  width: ${props => (props.small ? "25px" : "100%")};
  height: ${props => (props.small ? "25px" : "100%")};
  max-width: 100px;
`
