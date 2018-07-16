import styled from "styled-components"

import Button from "base_components/RootButton"

export const SettingsButton = styled(Button)`
  background-color: #eeeeee;
  margin-right: 15px;
  width: 95px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;

  &:hover {
    color: #333333;
    background-color: #e0e0e0;
  }
`
