import React from "react"
// components
import Form from "./components/Form"
import Panel from "./components/Panel"
import Button from "./components/Button"
import { FormGroup, Label, Text } from "base_components/RootForm"

const ItemTabAccountSettings = () => (
  <Form>
    <PanelEmailAddress />
    <Button>Update</Button>
  </Form>
)

export default ItemTabAccountSettings

//
const PanelEmailAddress = () => (
  <Panel title="Email Notifications" paddingBottom="1.6em">
    <FormGroup>
      <Label>Administration email address &#42;</Label>
      <Text name="notification-email" placeholder="email@email.com" />
    </FormGroup>
  </Panel>
)
