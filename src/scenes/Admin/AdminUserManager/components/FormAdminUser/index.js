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
import PanelAccountRole from "./components/PanelAccountRole"
import PanelControlGroup from "./components/PanelControlGroup"

const ResponsivePanel = Panel.extend`
  padding-bottom: 1.3em;

  @media screen and (min-width: 768px) {
    width: 100%;
  }

  @media screen and (min-width: 1450px) {
    width: 75%;
  }

  @media screen and (max-width: 1350px) {
    min-width: 650px;
  }

  @media screen and (max-width: 767px) {
    min-width: unset;
  }
`

// extend-form
const MainForm = styled(Form)`
  width: 100%;
  overflow-x: scroll;
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
      <PanelAccountRole />
      <PanelControlGroup />
      <ButtonUpdate>Update</ButtonUpdate>
    </MainForm>
  </ContainerBodyAdmin>
)

export default FormAdminUser
