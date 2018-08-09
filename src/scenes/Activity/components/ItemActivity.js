import React from "react"
import styled from "styled-components"

import FlagCheckbox from "base_components/RootForm/components/FlagCheckbox"
import { TableRow } from "base_components/Tables"
import RootForm, { CheckboxCircle } from "base_components/RootForm"
import UserAvatar from "base_components/UserAvatar"
import ActivityMessage from "global/Activities/ActivityMessage"

// for table row data.
const TableRowCourseTd = styled.td`
  text-align: ${props => (props.middle ? "center" : "left")};
  margin: 1em 0;
  padding: 25px 8px !important;
  vertical-align: middle !important;
`

// for table row course.
const DateSpan = styled.span`
  color: #7e7e7e;
  position: relative;
  left: 11px;
  display: block;
`

// component for the table row course.
const ItemActivity = ({ activity }) => {
  const { created_at, flagged, user } = activity

  return (
    <TableRow>
      <TableRowCourseTd middle style={{ textAlign: "left" }}>
        <DateSpan>{created_at.date}</DateSpan>
        <DateSpan>{created_at.time}</DateSpan>
      </TableRowCourseTd>
      <TableRowCourseTd middle style={{ textAlign: "left" }}>
        <ActivityMessage activity={activity} />
      </TableRowCourseTd>
      <TableRowCourseTd>
        <UserAvatar small image={user.avatar.url} />
      </TableRowCourseTd>
      <TableRowCourseTd middle>
        <FlagCheckbox isFlagged={flagged} onClick={() => {}} />
      </TableRowCourseTd>
      <TableRowCourseTd middle style={{ textAlign: "center" }}>
        <RootForm>
          <CheckboxCircle name="read" />
        </RootForm>
      </TableRowCourseTd>
    </TableRow>
  )
}

export default ItemActivity
