import React from "react"
import UserAvatar from "base_components/UserAvatar"
import { Root, Name, Date, Time, UserInfoContainer } from "./elements"

const ActivityCellFormatter = ({ activity }) => (
  <Root>
    <UserAvatar size="small" image={activity.avatarURL} />
    <UserInfoContainer>
      <Name>{activity.name}</Name>
      <Date>{activity.date.day}</Date>
      <Time>{activity.date.time}</Time>
    </UserInfoContainer>
  </Root>
)

export default ActivityCellFormatter
