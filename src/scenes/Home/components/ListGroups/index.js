import React, { Component } from "react"

import ListItemGroup from "../ListItemGroup"
import NoGroups from "../NoGroups"

class ListGroups extends Component {
  render() {
    const { groups } = this.props

    if (!Array.isArray(groups) || groups.length === 0) {
      return <NoGroups />
    }

    return groups.map(group => <ListItemGroup key={group.id} group={group} />)
  }
}

export default ListGroups
