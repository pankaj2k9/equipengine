import React, { Component, Fragment } from "react"
import { identical } from "ramda"
import { isNotNil } from "ramda-adjunct"
// components
import AdminCourseModal from "scenes/Admin/CourseCreator/components/ContentAdminCourse/scenes/components/AdminCourseModal"
import Form, {
  FormGroup,
  Label,
  TextArea,
  Text
} from "base_components/RootForm"
import ButtonUpload from "base_components/ButtonUpload"
import Button from "base_components/RootButton"
import FileChooser from "base_components/FileChooser"
// react select
import Select from "react-select"
// resources
import modalActionsStyles, { buttonExtendStyles } from "./styles"
import modalActions, { modalBody, contentModalActions } from "./propTypes"

import Quiz from "./Quiz"

import form from "hoc/form"

import { openFileChooser } from "utils/formFunctions"

/**
 * -------------------------------------
 * Modal new actions
 * @see ModalBody
 * -------------------------------------
 */
class ModalActions extends Component {
  state = {
    selectedOption: ""
  }

  handleChange = selectedOption => this.setState({ selectedOption })

  render() {
    const { handleClose, isOpen, className } = this.props
    return (
      <AdminCourseModal
        handleClose={handleClose}
        isOpen={isOpen}
        className={className}
        modal={{
          header: {
            title: "New Action"
          },
          body: {
            children: (
              <ModalBody
                selectedOption={this.state.selectedOption}
                handleChange={this.handleChange}
              />
            )
          },
          footer: {
            buttonTitle: "Save"
            //buttonHandler: () => console.log('handle click')
          }
        }}
      />
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
const ModalBody = ({ selectedOption, handleChange }) => {
  // if tehre is selected option, assign the value in value variable
  const actionType = selectedOption ? selectedOption.value : null
  // label text
  const labelText = identical("question", actionType)
    ? "Question"
    : "Description"

  return (
    <Fragment>
      <FormGroup>
        <Label>Select action type</Label>
        <Select
          name="dropdown-action"
          value={actionType}
          onChange={handleChange}
          options={[
            { value: "reading", label: "Reading" },
            { value: "question", label: "Question" },
            { value: "watch", label: "Watch" },
            { value: "quiz", label: "Quiz" }
          ]}
        />
      </FormGroup>
      {isNotNil(actionType) && (
        <ContentModalActions labelText={labelText} actionType={actionType} />
      )}
    </Fragment>
  )
}

ModalBody.propTypes = modalBody.props
ModalBody.defaultProps = modalBody.default

/**
 * -------------------------------------
 * ContentModalActions
 * @see ModalBody
 * -------------------------------------
 */
const ContentModalActions = form(
  {
    description: ""
  },
  ["file"]
)(
  ({
    labelText,
    actionType,
    fields: { description },
    refs: { file },
    onChange
  }) => (
    <Fragment>
      {actionType === "quiz" ? (
        <Quiz />
      ) : (
        <Fragment>
          <div>
            <FormGroup>
              <Label>{labelText} &#42;</Label>
              <TextArea
                value={description}
                onChange={e => onChange(e.target.value, "description")}
                name="description"
                placeholder="Communication and culture is focused on those who want to serve in their local community."
                row={7}
              />
            </FormGroup>
            <FormGroup>
              <Label>Upload File</Label>
              <div>
                <ButtonUpload onClick={e => openFileChooser(e, file)} />
                <FileChooser
                  onChooseFiles={([file]) => onChange(file, "file")}
                  ref={file}
                />
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
      )}
    </Fragment>
  )
)

ContentModalActions.propTypes = contentModalActions.props
ContentModalActions.defaultProps = contentModalActions.default
