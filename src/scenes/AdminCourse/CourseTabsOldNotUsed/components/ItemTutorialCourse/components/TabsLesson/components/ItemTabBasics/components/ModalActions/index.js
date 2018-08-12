import React, { Component, Fragment } from "react"
import { identical } from "ramda"
// components
import CreateEntityModal from "base_components/CreateEntityModal"
import Form, {
  FormGroup,
  Label,
  TextArea,
  Text
} from "base_components/RootForm"
import ButtonUpload from "base_components/ButtonUpload"
import Button from "base_components/RootButton"
import FileChooser from "base_components/FileChooser"
import ContainerFlex from "base_components/ContainerFlex"
// resources
import modalActionsStyles, { buttonExtendStyles } from "./styles"
import modalActions, { modalBody, contentModalActions } from "./propTypes"

import { openFileChooser } from "utils/formFunctions"

import form from "hoc/form"

/**
 * -------------------------------------
 * Modal new actions
 * @see ModalBody
 * -------------------------------------
 */
class ModalActions extends Component {
  render() {
    const { handleClose, isOpen, className } = this.props

    return (
      <Form>
        <CreateEntityModal
          className={className}
          title="New Action"
          isOpen={isOpen}
          onClose={handleClose}
          isSubmitting={false}
          onSubmit={() => {
            console.log("Submit")
          }}
        >
          <ModalBody />
        </CreateEntityModal>
      </Form>
    )
  }
}

ModalActions.propTypes = modalActions.props
ModalActions.defaultProps = modalActions.default

export default modalActionsStyles(ModalActions)

/**
 * -------------------------------------
 * ButtonSelect
 * @see ModalBody
 * -------------------------------------
 */
const ButtonSelect = buttonExtendStyles(Button)

/**
 * -------------------------------------
 * ModalBody
 * @see ModalActions
 * -------------------------------------
 */
const ModalBody = form(
  {
    audioFile: null,
    videoLink: ""
  },
  ["audioFileRef"]
)(({ fields: { videoLink }, refs: { audioFileRef }, onChange }) => (
  <Fragment>
    <FormGroup>
      <ContainerFlex isColumn>
        <Label>Upload audio File(mp3)</Label>
        <ButtonUpload onClick={e => openFileChooser(e, audioFileRef.current)} />
        <FileChooser
          onChooseFiles={([file]) => onChange(file, "file")}
          ref={audioFileRef}
        />
      </ContainerFlex>
    </FormGroup>
    <FormGroup>
      <Label>Paste video link</Label>
      <TextArea
        value={videoLink}
        onChange={e => onChange(e.target.value, "videoLink")}
      />
    </FormGroup>
    <FormGroup>
      <ContainerFlex isColumn>
        <Label>Choose from your library</Label>
        <Button light lightBorder>
          Choose
        </Button>
      </ContainerFlex>
    </FormGroup>
  </Fragment>
))

ModalBody.propTypes = modalBody.props
ModalBody.defaultProps = modalBody.default

/**
 * -------------------------------------
 * ContentModalActions
 * @see ModalBody
 * -------------------------------------
 */
const ContentModalActions = ({ labelText, actionType }) => (
  <Fragment>
    <div>
      <FormGroup>
        <Label>{labelText} &#42;</Label>
        <TextArea
          name="description"
          placeholder="Communication and culture is focused on those who want to serve in their local community."
          row={7}
        />
      </FormGroup>
      <FormGroup>
        <Label>Upload File</Label>
        <div>
          <ButtonUpload />
        </div>
      </FormGroup>
    </div>
    {identical("watch", actionType) && (
      <div>
        <FormGroup>
          <Label>Paste video link:</Label>
          <Text name="videoLink" />
        </FormGroup>
        <FormGroup>
          <Label>Choose from your library</Label>
          <ButtonSelect light lightBorder>
            Select
          </ButtonSelect>
        </FormGroup>
      </div>
    )}
  </Fragment>
)

ContentModalActions.propTypes = contentModalActions.props
ContentModalActions.defaultProps = contentModalActions.default
