import styled from "styled-components"

import BaseForm from "base_components/RootForm"
import Panel from "base_components/Panel"
import PanelAdminUser from "../PanelAdminUser"

export const Root = styled(PanelAdminUser)`
  border-top: 1px solid #dadada;
  padding-bottom: 21px;
`

export const MainForm = styled(BaseForm)`
  width: 100%;
  overflow-x: scroll;
`

export const ResponsivePanel = Panel.extend`
  padding-bottom: 1.3em;

  @media screen and (min-width: 768px) {
    width: 100%;
  }

  @media screen and (min-width: 1450px) {
    width: 75%;
  }

  @media screen and (max-width: 1350px) {
    min-width: 550px;
  }

  @media screen and (max-width: 767px) {
    min-width: unset;
  }
`
