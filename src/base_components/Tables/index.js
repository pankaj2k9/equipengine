import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Table } from "react-bootstrap"

import TableRow from "./components/TableRow"
import Td from "./components/Td"
import Th, { ThWithSort } from "./components/Th"

// TODO -> turn the sub components into styled component.
const Tables = ({ children, className }) => (
  <Table className={`Tables ${className}`} responsive>
    {children}
  </Table>
)
Tables.defaultProps = {
  isLayoutFixed: false
}
Tables.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  className: PropTypes.string,
  isLayoutFixed: PropTypes.bool
}

export default styled(Tables)`
  ${({ isLayoutFixed }) =>
    isLayoutFixed &&
    `
    table-layout: fixed;
  `} .Tables__row {
    border-bottom: 1px solid #dadada;
    transition: background 300ms ease-in;

    &:hover {
      background: #f2f3f6;
    }

    th {
      border: 0;
      font-size: 12px;
      font-weight: 400;
      color: #636363;
      text-transform: uppercase;
      padding-bottom: 3px;
    }
  }
`

export { TableRow, Th, Td, ThWithSort }
