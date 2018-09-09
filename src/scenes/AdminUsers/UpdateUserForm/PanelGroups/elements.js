import styled from "styled-components"

import PanelAdminUser from "../PanelAdminUser"

export const Root = styled(PanelAdminUser)`
  padding-bottom: 20px;
`

export const List = styled.div`
  max-height: 120px;
  padding: 14px 22px;
  border: 2px solid #f3f3f3;
  overflow-y: auto;

  > div:not(:last-child) {
    margin-bottom: 15px;
    font-size: 14px;
    line-height: 20px;
  }
`
