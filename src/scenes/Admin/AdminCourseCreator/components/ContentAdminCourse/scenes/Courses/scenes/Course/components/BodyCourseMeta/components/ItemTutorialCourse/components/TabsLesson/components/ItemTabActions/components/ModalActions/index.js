import React, { Component } from 'react'
import PropTypes from 'prop-types'
// components
import AdminCourseModal from 'scenes/Admin/AdminCourseCreator/components/ContentAdminCourse/scenes/components/AdminCourseModal'
import Form, { FormGroup, Label } from 'base_components/RootForm'
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
    const { handleClose, isOpen } = this.props
    return (
      <Form>
        <AdminCourseModal
          handleClose={handleClose}
          isOpen={isOpen}
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
  handleClose: PropTypes.func.isRequired
}

ModalActions.defaultProps = {
  isOpen: false,
  handleClose () {
    console.log('Default click')
  }
}

export default ModalActions

/**
 * @see ModalActions
 * -------------------------------------
 */
const ModalBody = ({selectedOption, handleChange, className}) => {
  console.log(selectedOption)
  // if tehre is selected option, assign the value in value variable
  const value = selectedOption && selectedOption.value
  return (
    <div className={className}>
      <FormGroup>
        <Label>Select action type</Label>
        <Select
          name='dropdown-action'
          value={value}
          onChange={handleChange}
          options={[
            { value: 'reading', label: 'Reading' },
            { value: 'question', label: 'Question' },
            { value: 'watch', label: 'Watch' }
          ]}
        />
      </FormGroup>
      <div />
    </div>
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

// TODO:
// Create class ModalAction component to handle state for our Select component and to achieve a dynamic content for our ModalBody. We can use the selectedOption state to achieve our task.
// We also need to create a general component for our Dropdown using react-select
