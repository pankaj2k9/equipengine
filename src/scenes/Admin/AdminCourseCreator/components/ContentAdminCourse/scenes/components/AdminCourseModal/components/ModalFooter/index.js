import React from 'react'
import PropTypes from 'prop-types'
//
import Button from 'base_components/RootButton'

const ModalFooter = ({buttonTitle, buttonHandler}) => (
  <Button onClick={buttonHandler}>{buttonTitle}</Button>
)

ModalFooter.propTypes = {
  buttonTitle: PropTypes.string.isRequired,
  buttonHandler: PropTypes.func.isRequired
}

export default ModalFooter
