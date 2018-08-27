import React from "react"
import styled from "styled-components"

import UserInfoFormatter from "base_components/UserInfoFormatter"

const Root = styled.div`
  padding-left: 10px;
`

const StudentItemFormatter = ({ user }) => (
  <Root>
    <UserInfoFormatter user={user} />
  </Root>
)

export default StudentItemFormatter
