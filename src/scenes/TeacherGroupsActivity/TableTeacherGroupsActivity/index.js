import PropTypes from "prop-types"
import React from "react"

import { TableRow } from "base_components/Tables"
import DateTime from "base_components/DateTime"

import { ActivityTable, AvatarActivity, ContainerActivity } from "./elements"

const TableTeacherGroupsActivity = ({ activities, onSelect }) => (
  <ActivityTable>
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
  </ActivityTable>
)

TableTeacherGroupsActivity.propTypes = {
  activities: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired
}

TableTeacherGroupsActivity.defaultProps = {
  activities: [],
  onSelect: () => {}
}

export default TableTeacherGroupsActivity
