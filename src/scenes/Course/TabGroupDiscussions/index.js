import React from "react"
import { compose, getContext } from "recompose"

import TableDiscussions from "../TableDiscussions"
import Thread from "../Thread"
import { contextPropTypes } from "../propTypes"

const TabGroupDiscussions = ({ discussions, selectThread }) => (
  <div>
    <Thread />

    <TableDiscussions discussions={discussions} onSelect={selectThread} />
  </div>
)

export default compose(getContext(contextPropTypes))(TabGroupDiscussions)
