import React from "react"
import moment from "moment"
import DatePicker from "react-datepicker"
import styled from "styled-components"
import "react-datepicker/dist/react-datepicker.css"

import calendarIcon from "resources/images/calendar.svg"

export default styled(
  ({ className, value, placeholder, onChange, ...rest }) => (
    <div className={className}>
      <DatePicker
        selected={moment(value).isValid() ? moment(value) : ""}
        onChange={onChange}
        placeholderText={placeholder}
        peekNextMonth
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
        className="date-input"
        {...rest}
      />
    </div>
  )
)`
  /**
   * Default input styles, same as Text styles
   */
  .date-input {
    background: url(${calendarIcon}) no-repeat scroll 7px 7px;
    padding-left: 30px;
    border: 1px solid #dddddd;
    border-radius: 3px;
    font-size: 14px;
    width: 100%;
    height: 40px;

    &:focus {
      outline: 0;
    }

    ::placeholder {
      color: #c0c0c0;
    }
  }

  /**
   * Date picker overrides to match existing app styles
   */
  & .react-datepicker {
    font-family: ${props => props.theme.fontFamily};
  }
  & .react-datepicker-wrapper {
    width: 100%;
  }
  & .react-datepicker__input-container {
    width: 100%;
  }
`
