import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
//
import { Modal } from 'react-bootstrap'

const ExtendModalHeader = styled(Modal.Header)`
  padding: 20px 35px;
  border-bottom: 1px solid #D8D8D8;
`

const ModalHeader = ({children}) => (
  <ExtendModalHeader>
    {children}
  </ExtendModalHeader>
)

ModalHeader.propTypes = {
  children: PropTypes.element.isRequired
}

export default ModalHeader
