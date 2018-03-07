import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
//
import iconAdd from './add.svg'

const ModalHeader = styled(({className, title}) => (
  <header className={className}>
    <img alt='icon add' src={iconAdd} />
    <h5>{title}</h5>
  </header>
))`
  display: flex;
  align-items: center;

  h5 {
    margin-left: 1.1em;
    font-weight: 800;
    font-size: 1.1rem;
    color: #000000;
  }
`

ModalHeader.propTypes = {
  title: PropTypes.string
}

export default ModalHeader
