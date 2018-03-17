import React, { Fragment } from 'react'
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
const ModalActions = ({isOpen, handleClose}) => (
  <Form>
    <AdminCourseModal
      handleClose={handleClose}
      isOpen={isOpen}
      modal={{
        header: {
          title: 'New Action'
        },
        body: {
          children: <ModalBody />
        },
        footer: {
          buttonTitle: 'Save',
          buttonHandler: () => console.log('handle click')
        }
      }}
    />
  </Form>
)

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
const ModalBody = () => (
  <Fragment>
    <FormGroup>
      <Label>Select action type</Label>
      <Dropdown />
    </FormGroup>
  </Fragment>
)

// TODO:
// Create class ModalAction component to handle state for our Select component and to achieve a dynamic content for our ModalBody. We can use the selectedOption state to achieve our task.
// We also need to create a general component for our Dropdown using react-select
class Dropdown extends React.Component {
  state = {
    selectedOption: ''
  }

  handleChange = (selectedOption) => this.setState({ selectedOption })

  render () {
    const { selectedOption } = this.state
    // if tehre is selected option, assign the value in value variable
    const value = selectedOption && selectedOption.value

    return (
      <Select
        name='dropdown-action'
        value={value}
        onChange={this.handleChange}
        options={[
          { value: 'reading', label: 'Reading' },
          { value: 'question', label: 'Question' },
          { value: 'watch', label: 'Watch' }
        ]}
      />
    )
  }
}
