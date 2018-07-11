import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const DateTime = styled(({ className, date, time }) => {
  if (date && date instanceof Date) {
    time = date.toLocaleString("en-gb", {
      hour: "numeric",
      minute: "numeric",
      hour12: true
    })
    date = date.toLocaleString("en-gb", {
      month: "short",
      day: "numeric"
    })
  }
  return (
    <div className={className}>
      <span>{date}</span>
      <span>{time}</span>
    </div>
  )
})`
  display: flex;
  flex-direction: column;
  font-size: 10px;
  font-weight: ${props => props.bold && "800"};
  color: ${props => (props.accent ? "#338FFC" : "#7e7e7e")};
  text-align: ${props => props.center && "center"};
`

DateTime.proTypes = {
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  accent: PropTypes.bool,
  bold: PropTypes.bool,
  center: PropTypes.bool
}

export default DateTime
