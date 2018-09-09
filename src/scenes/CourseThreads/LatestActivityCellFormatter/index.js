import React from "react"
import UserAvatar from "base_components/UserAvatar"
import DateTime from "base_components/DateTime"
import {
  Root,
  Name,
  UserInfoContainer
} from "base_components/Table/ActivityCellFormatter/elements"

const LatestActivityCellFormatter = ({ activity }) => {
  let date = new Date(activity.created_at)
  return (
    <Root>
      <UserAvatar small image={activity.avatar.url} />
      <UserInfoContainer>
        <Name>{activity.first_name}</Name>
        <DateTime date={date} />
      </UserInfoContainer>
    </Root>
  )
}

export default LatestActivityCellFormatter
