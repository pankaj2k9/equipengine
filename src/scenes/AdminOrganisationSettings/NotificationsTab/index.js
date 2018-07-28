import React, { Component } from "react"
import joi from "joi"
import { toastr } from "react-redux-toastr"
import { compose, pure } from "recompose"

import { FormGroup, Label, Text } from "base_components/RootForm"

import { Form, Panel, Button } from "./elements"

import { updateFieldValue, validate } from "utils/formFunctions"

const validationSchema = joi.object().keys({
  email: joi
    .string()
    .email()
    .required()
    .label("Valid email is required")
})

const PanelEmailAddress = ({ email, onChange }) => (
  <Panel title="Email Notifications" paddingBottom="1.6em">
    <FormGroup>
      <Label>Administration email address &#42;</Label>
      <Text
        placeholder="email@email.com"
        value={email}
        onChange={e => onChange(e.target.value, "email")}
      />
    </FormGroup>
  </Panel>
)

class ItemTabAccountSettings extends Component {
  state = {
    email: ""
  }

  onChange = (e, selector) => {
    const fields = this.state

    const nextFields = updateFieldValue(e, selector, fields)

    this.setState(nextFields)
  }

  onSubmit = () => {
    const fields = this.state

    const validationResult = validate(fields, validationSchema)

    if (!validationResult.error) {
      return toastr.success(
        "Notifications settings",
        "Data updated successfully"
      )
    }

    toastr.error(
      "Validation error",
      validationResult.error.details[0].context.label
    )
  }

  render() {
    const { email } = this.state

    return (
      <Form>
        <PanelEmailAddress email={email} onChange={this.onChange} />
        <Button onClick={this.onSubmit}>Update</Button>
      </Form>
    )
  }
}

export default compose(pure)(ItemTabAccountSettings)
