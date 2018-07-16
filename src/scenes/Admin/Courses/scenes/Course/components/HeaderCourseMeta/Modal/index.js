import React from "react"
import PropTypes from "prop-types"

import { compose, withStateHandlers } from "recompose"

import BaseModal from "base_components/Modal"
import { Label } from "base_components/RootForm"
import Button from "base_components/RootButton"
import { Text, TextArea, FormGroup } from "base_components/RootForm"
import ButtonUpload from "base_components/ButtonUpload"

import GearIcon from "react-icons/lib/md/settings"

import { Header as HeaderElement, H5 } from "./elements"

const Header = () => (
  <HeaderElement>
    <GearIcon color="#BFBFBF" fontSize={39} />{" "}
    <H5>Course settings and information</H5>
  </HeaderElement>
)

const Body = ({ updateVal, name, description }) => (
  <div>
    <FormGroup>
      <Label>Course Name &#42;</Label>
      <Text
        value={name}
        onChange={e => updateVal(e, "name")}
        placeholder="Communication and culture"
      />
    </FormGroup>
    <FormGroup>
      <Label>Course Description</Label>
      <TextArea
        value={description}
        onChange={e => updateVal(e, "description")}
        placeholder="Communication and culture is focused on those who want to serve in their local community."
        row={7}
      />
    </FormGroup>
    <FormGroup>
      <Label>Course Main Image</Label>
      <div>
        <ButtonUpload />
      </div>
    </FormGroup>
    <FormGroup>
      <Label>Course Banner Image</Label>
      <div>
        <ButtonUpload />
      </div>
    </FormGroup>
  </div>
)

const Footer = () => (
  <Button onClick={() => console.log("Create new course!")}>Add</Button>
)

const Modal = ({ handleClose, isOpen, updateVal, name, description }) => (
  <BaseModal
    isOpen={isOpen}
    onClose={handleClose}
    header={<Header />}
    body={<Body updateVal={updateVal} name={name} description={description} />}
    footer={<Footer />}
  />
)

Modal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired
}

export default compose(
  withStateHandlers(
    {
      name: "",
      description: "",
      mainImage: null,
      bannerImage: null
    },
    {
      updateVal: props => (e, selector) => {
        const { value } = e.target

        return {
          ...props,
          [selector]: value
        }
      }
    }
  )
)(Modal)
