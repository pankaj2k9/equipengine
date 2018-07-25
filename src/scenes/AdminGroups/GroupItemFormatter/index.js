import React from "react"
import IconUser from "react-icons/lib/fa/user"

import { Root, Icon } from "./elements"

const GroupItemFormatter = ({ group }) => (
  <Root>
    <div>{group.title}</div>
    <div>
      <Icon>
        <IconUser />
      </Icon>
      {group.user_ids.length}/{group.user_limit}
    </div>
  </Root>
)

export default GroupItemFormatter
