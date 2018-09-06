import React from "react"

import { Delimiter, PostedBy, PostedDate, Title } from "./elements"
import DateTime from "base_components/DateTime"

const DiscussionCellFormatter = ({ discussion, onClick }) => (
  <div>
    <Title onClick={onClick}>{discussion.title}</Title>
    <Delimiter />
    <PostedBy>Posted by {`${discussion.user.first_name}`}</PostedBy>
    <PostedDate>
      <DateTime date={new Date(discussion.created_at)} withYear withoutTime />
    </PostedDate>
  </div>
)

export default DiscussionCellFormatter
