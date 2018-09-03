import React, { Component } from "react"
import { toastr } from "react-redux-toastr"
import { compose, pure } from "recompose"
import joi from "joi"

import { types } from "../ducks"

import WebAddressPanel from "./WebAddressPanel"
import DomainMappingPanel from "./DomainMappingPanel"

import { Button, Form } from "./elements"

import { updateFieldValue, validate } from "utils/formFunctions"

const validationSchema = joi.object().keys({
  subdomain: joi
    .string()
    .required()
    .label("Subdomain field is required")
})

class ItemTabDomainMapping extends Component {
  state = {
    fields: {
      subdomain: this.props.organization.subdomain,
      isUseCustomDomain: false,
      domain: this.props.organization.domain
    }
  }

  onChange = (event, selector) => {
    const { fields } = this.state

    const nextFields = updateFieldValue(event, selector, fields)

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
          toastr.success("Domain mapping", "Data is updated successfully")
        } else {
          toastr.error("Domain mapping", "Error while updating")
        }
      })
    }
  }

  render() {
    const { subdomain, isUseCustomDomain, domain } = this.state.fields

    return (
      <Form>
        <WebAddressPanel subdomain={subdomain} onChange={this.onChange} />
        <DomainMappingPanel
          isUseCustomDomain={isUseCustomDomain}
          domain={domain}
          onChange={this.onChange}
        />
        <Button onClick={this.onSubmit}>Update</Button>
      </Form>
    )
  }
}

export default compose(pure)(ItemTabDomainMapping)
