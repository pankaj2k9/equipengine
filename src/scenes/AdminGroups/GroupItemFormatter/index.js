import React from "react"

import { Icon, MetaInfo, Root, Title } from "./elements"

const GroupItemFormatter = ({ group }) => (
  <Root>
    <Title>{group.title}</Title>
    <MetaInfo>
      <Icon />
      {group.user_ids ? group.user_ids.length / group.user_limit : ""}
    </MetaInfo>
  </Root>
)

export default GroupItemFormatter
