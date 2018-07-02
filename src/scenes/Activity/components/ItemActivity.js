import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

import { FlaggedIcon } from "base_components/SearchbarTable"
import { TableRow } from "base_components/Tables"
import RootForm, { CheckboxCircle } from "base_components/RootForm"
import UserAvatar from "base_components/UserAvatar"

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

const formatActivityTitle = ({ eventable_type, user, course, lesson }) => {
  if (eventable_type && eventable_type === "Comment") {
    return (
      <React.Fragment>
        {user.first_name} {user.last_name} commented on{" "}
        <Link to={`/secure/courses/${course.id}`}>
          {lesson.title}: {course.title}
        </Link>
      </React.Fragment>
    )
  }
  return eventable_type
}

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
        {formatActivityTitle(activity)}
      </TableRowCourseTd>
      <TableRowCourseTd>
        <UserAvatar small image={user.avatar.url} />
      </TableRowCourseTd>
      <TableRowCourseTd middle>
        <FlaggedIcon big isFlagged={flagged} />
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
