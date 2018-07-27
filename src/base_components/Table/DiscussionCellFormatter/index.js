import React from "react"

import { Delimeter, PostedBy, PostedDate, Title } from "./elements"

const DiscussionCellFormatter = ({ discussion }) => (
  <div>
    <Title>{discussion.title}</Title>
    <Delimeter />
    <PostedBy>Posted by {discussion.name}</PostedBy>
    <PostedDate>
      {discussion.date.day} {discussion.date.time}
    </PostedDate>
  </div>
)

export default DiscussionCellFormatter
