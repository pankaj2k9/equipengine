import React from "react"
//
import styled from "styled-components"
import Form from "base_components/RootForm"
import ButtonUpdate from "base_components/ButtonUpdate"
// sub-components
import PanelGeneralInfo from "./components/PanelGeneralInfo"
import PanelUsers from "./components/PanelUsers"
import PanelGroupNoticeBoard from "./components/PanelGroupNoticeBoard"
import PanelControlGroup from "./components/PanelControlGroup"

const ItemTabAdminGroupSettings = ({ className }) => (
  <Form>
    <PanelGeneralInfo className={`${className}__panel`} />
    <PanelUsers className={`${className}__panel`} />
    <PanelGroupNoticeBoard className={`${className}__panel`} />
    <PanelControlGroup className={`${className}__panel`} />
    <ButtonUpdate>Update</ButtonUpdate>
  </Form>
)

export default styled(ItemTabAdminGroupSettings)`
  &__panel {
    width: 100%;
  }
`
