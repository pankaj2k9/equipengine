import React from "react"
import styled from "styled-components"
import IconUser from "react-icons/lib/fa/user"

const Icon = styled.i`
  color: ${props => props.theme.gray};
  margin-right: 0.3em;
`

const UserCountCellFormatter = ({ count }) => (
  <span>
    <Icon>
      <IconUser />
    </Icon>
    {count}
  </span>
)

export default UserCountCellFormatter
