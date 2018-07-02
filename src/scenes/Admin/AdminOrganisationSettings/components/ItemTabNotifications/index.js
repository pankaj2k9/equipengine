import React from "react"
// components
import Form from "./components/Form"
import Panel from "./components/Panel"
import Button from "./components/Button"
import { FormGroup, Label, Text } from "base_components/RootForm"
import { compose, pure, withStateHandlers } from "recompose"

const PanelEmailAddress = ({ email, updateEmail }) => (
  <Panel title="Email Notifications" paddingBottom="1.6em">
    <FormGroup>
      <Label>Administration email address &#42;</Label>
      <Text
        name="notification-email"
        placeholder="email@email.com"
        value={email}
        onChange={updateEmail}
      />
    </FormGroup>
  </Panel>
)

const ItemTabAccountSettings = ({ email, updateEmail, onSubmit }) => (
  <Form>
    <PanelEmailAddress email={email} updateEmail={updateEmail} />
    <Button onClick={onSubmit}>Update</Button>
  </Form>
)

export default compose(
  withStateHandlers(
    {
      email: ""
    },
    {
      updateEmail: () => event => ({
        email: event.target.value
      }),
      onSubmit: ({ email }) => event => {
        event.preventDefault()
        console.log("submit", { email })
      }
    }
  ),
  pure
)(ItemTabAccountSettings)
