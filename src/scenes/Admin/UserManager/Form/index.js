import React from "react"

import ContainerBodyAdmin from "scenes/Admin/components/ContainerAdminPanel/components/ContainerBodyAdmin"

import ButtonUpdate from "base_components/ButtonUpdate"
import UserDetails from "base_components/UserDetails"
import UserContacts from "base_components/UserContacts"

import PanelAccountRole from "./PanelAccountRole"
import PanelControlGroup from "./PanelControlGroup"

import { MainForm, ResponsivePanel } from "./elements"

const Form = () => (
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

export default Form
