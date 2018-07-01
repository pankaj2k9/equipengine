import React from "react"
import Tables from "base_components/Tables"

import ItemActivity from "./ItemActivity"

const ListActivities = ({ activities }) => (
  <Tables>
    <tbody>
      {Array.isArray(activities) &&
        activities.map(activity => (
          <ItemActivity key={activity.id} activity={activity} />
        ))}
    </tbody>
  </Tables>
)

export default ListActivities
