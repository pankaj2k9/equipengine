import React from "react"

import DateTime from "base_components/DateTime"

const DateCellFormatter = ({ date }) => (
  <DateTime date={date} fontSize="14px" withYear withoutTime />
)

export default DateCellFormatter
