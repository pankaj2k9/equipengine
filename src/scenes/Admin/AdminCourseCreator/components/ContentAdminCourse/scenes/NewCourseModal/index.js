import React from 'react'
import PropTypes from 'prop-types'
//
import AdminCourseModal from '../components/AdminCourseModal'
import BodyContent from './components/BodyContent'

const NewCourseModal = ({handleClose, isOpen}) => {
  // informations use by the modal
  const modal = {
    header: {
      title: 'Create a new course'
    },
    body: {
      children: <BodyContent /> // we will pass the element of Body
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
