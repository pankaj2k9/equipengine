import React, { Component } from "react"
import { toastr } from "react-redux-toastr"
import { compose, pure } from "recompose"
import joi from "joi"

import { types } from "../ducks"

import { FormGroup, Label, Text } from "base_components/RootForm"
import { Form, Panel, Button } from "./elements"

import { updateFieldValue, validate } from "utils/formFunctions"

const validationSchema = joi.object().keys({
  notification_email: joi
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
        onChange={event => onChange(event.target.value, event.target.name)}
        name="notification_email"
      />
    </FormGroup>
  </Panel>
)

class ItemTabAccountSettings extends Component {
  state = {
    fields: {
      notification_email: this.props.organization.notification_settings
        .notification_email
    }
  }

  onChange = (e, selector) => {
    const { fields } = this.state

    const nextFields = updateFieldValue(e, selector, fields)

    this.setState({ fields: nextFields })
  }

  onSubmit = () => {
    const { fields } = this.state

    const validationResult = validate(fields, validationSchema)

    if (validationResult.error) {
      toastr.error(
        "Validation error",
        validationResult.error.details[0].context.label
      )
    } else {
      const {
        organization: { id },
        changeOrganization
      } = this.props

      changeOrganization({ id, organization: fields }).then(action => {
        if (action.type === types.CHANGE_ORGANIZATION_SUCCESS) {
          toastr.success(
            "Notifications settings",
            "Data is updated successfully"
          )
        } else {
          toastr.error("Notifications settings", "Error while updating")
        }
      })
    }
  }

  render() {
    const { notification_email } = this.state.fields

    return (
      <Form>
        <PanelEmailAddress
          email={notification_email}
          onChange={this.onChange}
        />
        <Button onClick={this.onSubmit}>Update</Button>
      </Form>
    )
  }
}

export default compose(pure)(ItemTabAccountSettings)
