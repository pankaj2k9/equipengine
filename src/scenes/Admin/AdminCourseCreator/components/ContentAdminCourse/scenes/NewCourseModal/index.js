import React from 'react'
import PropTypes from 'prop-types'
//
import AdminCourseModal from '../components/AdminCourseModal'

const Body = () => (
  <span>new course modal body</span>
)

const NewCourseModal = ({handleClose, isOpen}) => {
  // informations use by the modal
  const modal = {
    header: {
      title: 'Create a new course'
    },
    body: {
      children: <Body /> // we will pass the element of Body
    },
    footer: {
      buttonTitle: 'Create',
      buttonHandler () {
        console.log('Create new course!')
      }
    }
  }

  return (
    <AdminCourseModal
      isOpen={isOpen}
      handleClose={handleClose}
      modal={modal}
    />
  )
}

NewCourseModal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired
}

export default NewCourseModal
