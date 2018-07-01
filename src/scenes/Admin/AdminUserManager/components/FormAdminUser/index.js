import React from "react"
import styled from "styled-components"
// Container
import ContainerBodyAdmin from "../../../components/ContainerAdminPanel/components/ContainerBodyAdmin"
// form
import ButtonUpdate from "base_components/ButtonUpdate"
import Form from "base_components/RootForm"
import Panel from "base_components/Panel"
// sub-components
import UserDetails from "base_components/UserDetails"
import UserContacts from "base_components/UserContacts"
import PanelGroups from "./components/PanelGroups"
import PanelAccountRole from "./components/PanelAccountRole"
import PanelControlGroup from "./components/PanelControlGroup"

const ResponsivePanel = Panel.extend`
  @media screen and (min-width: 768px) {
    width: 75%;
  }
  padding-bottom: 1.3em;
`

// extend-form
const MainForm = styled(Form)`
  width: 100%;
`

const FormAdminUser = () => (
  <ContainerBodyAdmin>
    <MainForm>
      <ResponsivePanel title="User Details">
        <UserDetails />
      </ResponsivePanel>
      <ResponsivePanel>
        <UserContacts />
      </ResponsivePanel>
      <PanelGroups />
      <PanelAccountRole />
      <PanelControlGroup />
      <ButtonUpdate>Update</ButtonUpdate>
    </MainForm>
  </ContainerBodyAdmin>
)

export default FormAdminUser
