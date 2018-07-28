import React from "react"
import PropTypes from "prop-types"

import { compose, withStateHandlers } from "recompose"

import BaseModal from "base_components/Modal"
import { Label } from "base_components/RootForm"
import Button from "base_components/RootButton"
import { Text, TextArea, FormGroup } from "base_components/RootForm"
import ButtonUpload from "base_components/ButtonUpload"
import FileChooser from "base_components/FileChooser"

import GearIcon from "react-icons/lib/md/settings"

import { Header as HeaderElement, H5 } from "./elements"

import form from "hoc/form"

import { openFileChooser } from "utils/formFunctions"

const Header = () => (
  <HeaderElement>
    <GearIcon color="#BFBFBF" fontSize={39} />{" "}
    <H5>Course settings and information</H5>
  </HeaderElement>
)

const Body = form(
  {
    name: "",
    description: "",
    mainImage: null,
    bannerImage: null
  },
  ["mainImageRef", "bannerImageRef"]
)(
  ({
    fields: { name, description, mainImage, bannerImage },
    refs: { mainImageRef, bannerImageRef },
    onChange
  }) => (
    <div>
      <FormGroup>
        <Label>Course Name &#42;</Label>
        <Text
          value={name}
          onChange={e => onChange(e.target.value, "name")}
          placeholder="Communication and culture"
        />
      </FormGroup>
      <FormGroup>
        <Label>Course Description</Label>
        <TextArea
          value={description}
          onChange={e => onChange(e.target.value, "description")}
          placeholder="Communication and culture is focused on those who want to serve in their local community."
          row={7}
        />
      </FormGroup>
      <FormGroup>
        <Label>Course Main Image</Label>
        <div>
          <ButtonUpload
            isFileAttached={mainImage}
            onClick={e => openFileChooser(e, mainImageRef)}
          />
        </div>
        <FileChooser
          onChooseFiles={([file]) => onChange(file, "mainImage")}
          ref={mainImageRef}
        />
      </FormGroup>
      <FormGroup>
        <Label>Course Banner Image</Label>
        <div>
          <ButtonUpload
            isFileAttached={bannerImage}
            onClick={e => openFileChooser(e, bannerImageRef)}
          />
          <FileChooser
            onChooseFiles={([file]) => onChange(file, "bannerImage")}
            ref={bannerImageRef}
          />
        </div>
      </FormGroup>
    </div>
  )
)

const Footer = () => (
  <Button onClick={() => console.log("Create new course!")}>Add</Button>
)

const Modal = ({ handleClose, isOpen }) => (
  <BaseModal
    isOpen={isOpen}
    onClose={handleClose}
    header={<Header />}
    body={<Body />}
    footer={<Footer />}
  />
)

Modal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired
}

export default Modal
