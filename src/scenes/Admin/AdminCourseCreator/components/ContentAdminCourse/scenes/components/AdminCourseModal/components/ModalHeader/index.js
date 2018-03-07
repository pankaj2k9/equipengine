import React from 'react'
import PropTypes from 'prop-types'

const ModalHeader = ({title}) => (
  <span>{title}</span>
)

ModalHeader.propTypes = {
  title: PropTypes.string
}

export default ModalHeader
