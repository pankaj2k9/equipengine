import React from "react"
import styled from "styled-components"
// components
import PanelAdminUser from "../PanelAdminUser"
import DropdownUserRole from "./DropdownUserRole"
import AccountContainer from "./AccountContainer"
import MessengerAccess from "./MessengerAccess"

const PanelFormAccountRole = styled(PanelAdminUser)`
  border-top: 1px solid #dadada;
  padding-bottom: 21px;
`

const PanelAccountRole = () => (
  <PanelFormAccountRole title="Account Role">
    <DropdownUserRole />
    <AccountContainer />
    <MessengerAccess />
  </PanelFormAccountRole>
)

export default PanelAccountRole
