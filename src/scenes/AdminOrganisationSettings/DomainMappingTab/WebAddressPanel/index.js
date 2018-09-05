import React, { Component } from "react"

import ContainerFlex from "base_components/ContainerFlex"
import { FormGroup, Label } from "base_components/RootForm"
import { SubdomainText, Postfix, Panel } from "../elements"

export default class WebAddressPanel extends Component {
  handleChange = event => {
    const { onChange } = this.props
    onChange(event.target.value, event.target.name)
  }

  render() {
    const { subdomain } = this.props

    return (
      <Panel title="Web Address" paddingBottom="1.6em">
        <FormGroup>
          <Label>Name &#42;</Label>
          <ContainerFlex isAlignCenter>
            <SubdomainText
              value={subdomain}
              onChange={this.handleChange}
              placeholder="CrossView"
              name="subdomain"
            />
            <Postfix>.equipengine.com</Postfix>
          </ContainerFlex>
        </FormGroup>
      </Panel>
    )
  }
}
