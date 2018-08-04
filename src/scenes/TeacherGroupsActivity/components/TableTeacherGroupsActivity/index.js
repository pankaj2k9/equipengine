import React from "react"
import styled from "styled-components"

import "./styles.css"
import Table, { TableRow } from "base_components/Tables"
import DateTime from "base_components/DateTime"
import UserAvatar from "base_components/UserAvatar"

// the container component for our activity.
const ContainerActivity = styled.div`
  display: flex;

  p {
    button {
      display: inline;

      padding: 0;
      margin: 0;

      border: none;
      background: transparent;

      color: #2093e9;
      font-weight: bold;
    }
  }
`

// avatar that we will use to our activity table data.
const AvatarActivity = UserAvatar.extend`
  margin-right: 1em;
`

const TableTeacherGroupsActivity = ({ activities, onSelect }) => (
  <Table>
    <thead>
      <TableRow>
        <th>Time</th>
        <th>Course</th>
        <th>Activity</th>
      </TableRow>
    </thead>
    <tbody>
      {activities.map(item => (
        <TableRow>
          <td>
            <DateTime date={item.date.day} time={item.date.time} />
          </td>
          <td>
            <p>{item.course}</p>
          </td>
          <td>
            <ContainerActivity>
              <AvatarActivity image={item.avatarURL} />
              <p>
                {`${item.name} `}
                <button
                  onClick={() => onSelect(item.task.meta.id)}
                  type="button"
                >
                  {item.task.action}
                </button>
                {` ${item.task.meta.title}`}
              </p>
            </ContainerActivity>
          </td>
        </TableRow>
      ))}
    </tbody>
  </Table>
)

export default TableTeacherGroupsActivity
