import React, { Component } from "react"

import ButtonUpload from "base_components/ButtonUpload"
import ContainerFlex from "base_components/ContainerFlex"
import FileChooser from "base_components/FileChooser"

import {
  FormGroup,
  Label,
  Text,
  TextArea,
  Switch
} from "base_components/RootForm"

import {
  HintTextLogo,
  ContainerDisplayLogo,
  DisplayTextLogo,
  PanelSettings
} from "../elements"

import { openFileChooser } from "utils/formFunctions"

class GeneralInformationPanel extends Component {
  handleChange = event => {
    const { onChange } = this.props

    onChange(event.target.value, event.target.name)
  }

  handleCheckboxChange = event => {
    const { onChange } = this.props
    onChange(event.target.checked, event.target.name)
  }

  handleFileChange = ([file]) => {
    const { onChange } = this.props
    onChange(file, "file")
  }

  handleFilePickerOpen = event => {
    const { logoRef } = this.props
    openFileChooser(event, logoRef.current)
  }

  render() {
    const {
      title,
      displayName,
      description,
      logo,
      logoRef,
      displayLogoInsteadOfDisplay
    } = this.props

    return (
      <PanelSettings title="General Information" paddingBottom="1.6em">
        <FormGroup>
          <Label>Organisation Name &#42;</Label>
          <Text
            onChange={this.handleChange}
            value={title}
            name="title"
            placeholder="CrossView"
          />
        </FormGroup>
        <FormGroup>
          <Label>Display Name &#42;</Label>
          <Text
            onChange={this.handleChange}
            value={displayName}
            name="display_name"
          />
        </FormGroup>
        <FormGroup>
          <Label>Description of Organisation</Label>
          <TextArea
            onChange={this.handleChange}
            value={description}
            name="description"
            row="4"
            placeholder="Communication and culture is focused on those who want to serve in their local community."
          />
        </FormGroup>
        <FormGroup>
          <Label>Logo</Label>
          <ContainerFlex alignItems="center">
            <ButtonUpload
              onClick={this.handleFilePickerOpen}
              isFileAttached={logo}
            />
            <FileChooser onChooseFiles={this.handleFileChange} ref={logoRef} />
            <HintTextLogo>Recommended size: 160 x 55 px</HintTextLogo>
          </ContainerFlex>
          <ContainerDisplayLogo alignItems="center">
            <DisplayTextLogo>
              Display logo instead of display name
            </DisplayTextLogo>
            <Switch
              value={displayLogoInsteadOfDisplay}
              onChange={this.handleCheckboxChange}
              name="displayLogoInsteadOfDisplay"
            />
          </ContainerDisplayLogo>
        </FormGroup>
      </PanelSettings>
    )
  }
}

export default GeneralInformationPanel
