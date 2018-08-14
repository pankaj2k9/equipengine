import React from "react"

import { Icon, Meta, Root, Title } from "./elements"

const GroupItemFormatter = ({ group }) => (
  <Root>
    <Title>{group.title}</Title>
    <Meta>
      <Icon />
      {group.user_ids.length}/{group.user_limit}
    </Meta>
  </Root>
)

export default GroupItemFormatter
