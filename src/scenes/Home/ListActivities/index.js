import React, { Component } from "react"

import ListItemActivity from "../ListItemActivity"
import NoActivities from "../NoActivities"

class ListActivities extends Component {
  render() {
    const { activities } = this.props

    if (!Array.isArray(activities) || activities.length === 0) {
      return <NoActivities />
    }

    return (
      <ul>
        {activities.map(activity => (
          <ListItemActivity key={activity.id} activity={activity} />
        ))}
      </ul>
    )
  }
}

export default ListActivities
