import React, { Fragment } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

// TODO refactor when all the dates come to date objects
const DateTime = styled(
  ({ className, date, horizontal, time, withYear, withoutTime }) => {
    let year = ""
    if (date && date instanceof Date) {
      time = date.toLocaleString("en-gb", {
        hour: "numeric",
        minute: "numeric",
        hour12: true
      })
      year = date.toLocaleString("en-gb", {
        year: "2-digit"
      })
      date = date.toLocaleString("en-gb", {
        month: "short",
        day: "numeric"
      })
    }
    return (
      <div className={className}>
        {horizontal ? (
          <Fragment>
            {date} {withYear && year}
            {!withoutTime && time}
          </Fragment>
        ) : (
          <Fragment>
            <span>
              {date} {withYear && year}
            </span>
            {!withoutTime && <span>{time}</span>}
          </Fragment>
        )}
      </div>
    )
  }
)`
  display: flex;
  flex-direction: column;
  font-size: ${props => props.fontSize || "10px"};
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
