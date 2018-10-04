import React, { Component } from "react"
import { getContext } from "recompose"

import TableDiscussions from "../TableDiscussions"
import Thread from "../Thread"
import { contextPropTypes } from "../propTypes"

class TabGroupDiscussions extends Component {
  onSelect = threadId => {
    this.props.setActiveThread({ threadId })
    this.props.selectThread()
  }
  render() {
    const { discussions, createThreadDiscussion } = this.props
    return (
      <div>
        <Thread createThreadDiscussion={createThreadDiscussion} />

        <TableDiscussions discussions={discussions} onSelect={this.onSelect} />
      </div>
    )
  }
}
export default getContext(contextPropTypes)(TabGroupDiscussions)
