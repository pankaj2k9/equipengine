import React from "react"

import { Delimiter, PostedBy, PostedDate, Title } from "./elements"

const DiscussionCellFormatter = ({ discussion, onClick }) => (
  <div>
    <Title onClick={onClick}>{discussion.title}</Title>
    <Delimiter />
    <PostedBy>Posted by {discussion.name}</PostedBy>
    <PostedDate>
      {discussion.date.day} {discussion.date.time}
    </PostedDate>
  </div>
)

export default DiscussionCellFormatter
