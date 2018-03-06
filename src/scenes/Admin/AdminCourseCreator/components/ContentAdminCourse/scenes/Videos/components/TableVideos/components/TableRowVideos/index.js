import React from 'react'
import styled from 'styled-components'
//
import { TableRow, Td } from 'base_components/Tables'
import Button from 'base_components/RootButton'
import DateTime from 'base_components/DateTime'

// Box
const DataBox = styled.span`
  display: inline-block;
  width: 90px;
  height: 55px;
  border: 1px solid #979797;
  border-radius: 3px;
  background-color: #D8D8D8;
`
// Override
const TableData = Td.extend`
  vertical-align: top;

  &:first-child {
    width: 135px;
  }

  &:nth-child(2) {
    width: 50%;
  }

  &:nth-child(3) {
    color: #7E7E7E;
  }
`

//
const ExtendDateTime = styled(DateTime)`
  font-size: 14px;
  color: #7E7E7E;
`

//
const ButtonEdit = styled(Button)`
  background-color: #A2A2A2;
  color: #ffffff;
  transition: all 300ms ease-in;

  &:hover {
    background-color: #5a5a5a;
  }
`

const TableRowVideos = () => (
  <tbody>
    <TableRow>
      <TableData><DataBox /></TableData>
      <TableData verticalAlign='top'>Teacher speaking to students</TableData>
      <TableData>00:25:03</TableData>
      <TableData>
        <ExtendDateTime date='22 Sep' time='1:00pm' />
      </TableData>
      <TableData>
        <ButtonEdit>Edit</ButtonEdit>
      </TableData>
    </TableRow>
    <TableRow>
      <TableData><DataBox /></TableData>
      <TableData verticalAlign='top'>More on teaching video</TableData>
      <TableData>00:25:03</TableData>
      <TableData>
        <ExtendDateTime date='22 Sep' time='1:00pm' />
      </TableData>
      <TableData>
        <ButtonEdit>Edit</ButtonEdit>
      </TableData>
    </TableRow>
  </tbody>
)

export default TableRowVideos
