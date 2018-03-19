import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { identical } from 'ramda'
import { isNotEmpty } from 'ramda-adjunct'
// components
import AdminCourseModal from 'scenes/Admin/AdminCourseCreator/components/ContentAdminCourse/scenes/components/AdminCourseModal'
import Form, { FormGroup, Label, TextArea, Text } from 'base_components/RootForm'
import ButtonUpload from 'base_components/ButtonUpload'
import Button from 'base_components/RootButton'
// react select
import Select from 'react-select'

/**
 * -------------------------------------
 * Modal new actions
 * @see ModalBody
 * -------------------------------------
 */
class ModalActions extends Component {
  state = {
    selectedOption: ''
  }

  handleChange = (selectedOption) => this.setState({ selectedOption })

  render () {
    const { handleClose, isOpen, className } = this.props
    return (
      <Form>
        <AdminCourseModal
          handleClose={handleClose}
          isOpen={isOpen}
          className={className}
          modal={{
            header: {
              title: 'New Action'
            },
            body: {
              children: <ModalBody selectedOption={this.state.selectedOption} handleChange={this.handleChange} />
            },
            footer: {
              buttonTitle: 'Save',
              buttonHandler: () => console.log('handle click')
            }
          }}
        />
      </Form>
    )
  }
}

ModalActions.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  className: PropTypes.string
}

ModalActions.defaultProps = {
  isOpen: false,
  handleClose () {
    console.log('Default click')
  }
}

// TODO: Extract it to other files, styles
export default styled(ModalActions)`
  .Select {
    width: 160px;
  }

  .modal-body {
    padding: 0;

    > div {
      padding: 20px 35px;
      border-bottom: 1px solid #d8d8d8;
      margin-bottom: 0;

      &:last-child {
        border-bottom: 0;
      }
    }
  }
`

const ButtonSelect = styled(Button)`
  color: #BDBDBD;
  border-color: #BDBDBD;
  display: block;
`

/**
 * @see ModalActions
 * -------------------------------------
 */
const ModalBody = ({selectedOption, handleChange}) => {
  // if tehre is selected option, assign the value in value variable
  const actionType = selectedOption && selectedOption.value
  // label text
  const labelText = identical('question', actionType) ? 'Question' : 'Description'

  return (
    <Fragment>
      <FormGroup>
        <Label>Select action type</Label>
        <Select
          name='dropdown-action'
          value={actionType}
          onChange={handleChange}
          options={[
            { value: 'reading', label: 'Reading' },
            { value: 'question', label: 'Question' },
            { value: 'watch', label: 'Watch' }
          ]}
        />
      </FormGroup>
      {
        isNotEmpty(actionType) &&
          (
            <Fragment>
              <div>
                <FormGroup>
                  <Label>{labelText}</Label>
                  <TextArea
                    name='description'
                    placeholder='Communication and culture is focused on those who want to serve in their local community.'
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
              {
                identical('watch', actionType) &&
                  (
                    <div>
                      <FormGroup>
                        <Label>Paste video link:</Label>
                        <Text name='videoLink' />
                      </FormGroup>
                      <FormGroup>
                        <Label>Choose from your library</Label>
                        <ButtonSelect light lightBorder>Select</ButtonSelect>
                      </FormGroup>
                    </div>
                  )
              }
            </Fragment>
          )
      }
    </Fragment>
  )
}

ModalBody.propTypes = {
  selectedOption: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string
  ]),
  handleChange: PropTypes.func.isRequired
}

ModalBody.defaultProps = {
  selectedOption: '',
  handleChange: () => console.log('Handle change')
}
