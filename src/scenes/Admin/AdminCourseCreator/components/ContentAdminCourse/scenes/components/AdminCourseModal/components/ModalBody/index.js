import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const ModalBody = ({children}) => (
  <Fragment>
    {children}
  </Fragment>
)

ModalBody.propTypes = {
  children: PropTypes.element.isRequired
}

export default ModalBody
