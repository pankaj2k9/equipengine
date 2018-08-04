import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { map } from "ramda"

import DateTime from "base_components/DateTime"

// -------------------ITEM REPORT COMPONENT-----------------------------//
const ItemReport = styled(({ className, report }) => (
  <li className={className}>
    <DateTime date={report.date.date} time={report.date.time} />
    <p>{report.description}</p>
  </li>
))`
  display: flex;
  align-items: center;
  margin-bottom: 1.8em;

  &:last-child {
    margin-bottom: 0;
  }

  p {
    margin-bottom: 0;
    margin-left: 0.8em;
    font-size: 13px;
    color: #4f4f4f;
    text-align: inherit;

    a:focus {
      color: #23527c;
    }
  }
`

ItemReport.propTypes = {
  report: PropTypes.object.isRequired
}

// -------------------LIST COMPONENT-----------------------------//

// this is the list report component
const ListReport = ({ reports }) => {
  const listReport = map(
    report => <ItemReport key={report.id} report={report} />,
    reports
  )

  return <ul>{listReport}</ul>
}

ListReport.propTypes = {
  reports: PropTypes.array.isRequired
}

export default ListReport
