import React from "react"
import UserAvatar from "base_components/UserAvatar"
import DateTime from "base_components/DateTime"
import {
  Root,
  Name,
  UserInfoContainer
} from "base_components/Table/ActivityCellFormatter/elements"
import styled from "styled-components"

const StyledRoot = styled(Root)`
  align-items: center;
  justify-content: center;
`

const LatestActivityCellFormatter = ({ activity }) => {
  let date = new Date(activity.created_at)
  return (
    <StyledRoot>
      <UserAvatar small image={activity.avatar.url} />
      <UserInfoContainer>
        <Name>{activity.first_name}</Name>
        <DateTime date={date} />
      </UserInfoContainer>
    </StyledRoot>
  )
}

export default LatestActivityCellFormatter
