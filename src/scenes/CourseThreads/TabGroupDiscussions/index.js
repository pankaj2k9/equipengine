import React from "react"
import { getContext } from "recompose"

import TableDiscussions from "../TableDiscussions"
import Thread from "../Thread"
import { contextPropTypes } from "../propTypes"

const TabGroupDiscussions = ({
  discussions,
  selectThread,
  createThreadDiscussion
}) => {
  return (
    <div>
      <Thread createThreadDiscussion={createThreadDiscussion} />

      <TableDiscussions discussions={discussions} onSelect={selectThread} />
    </div>
  )
}

export default getContext(contextPropTypes)(TabGroupDiscussions)
