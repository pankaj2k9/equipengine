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
// react select
import Select from "react-select"
// resources
import modalActionsStyles, { buttonExtendStyles } from "./styles"
import modalActions, { modalBody, contentModalActions } from "./propTypes"

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
      <Form>
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
            { value: "watch", label: "Watch" }
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
