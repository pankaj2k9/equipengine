import React from "react"
import styled from "styled-components"

import Button from "base_components/RootButton"
import DateTime from "base_components/DateTime"
import { TableRow, Td } from "base_components/Tables"

// Box
const DataBox = styled.span`
  display: inline-block;
  width: 90px;
  height: 55px;
  border: 1px solid #979797;
  border-radius: 3px;
  background-color: #d8d8d8;
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
    color: #7e7e7e;
  }
`

const ExtendDateTime = styled(DateTime)`
  font-size: 14px;
  color: #7e7e7e;
`

const ButtonEdit = styled(Button)`
  background-color: #a2a2a2;
  color: #ffffff;
  transition: all 300ms ease-in;

  &:hover {
    background-color: #5a5a5a;
  }
`

const TableRowVideos = ({ onOpen, videos }) => (
  <tbody>
    {videos.map(video => (
      <TableRow>
        <TableData>
          <DataBox />
        </TableData>
        <TableData verticalAlign="top">{video.name}</TableData>
        <TableData>{video.length}</TableData>
        <TableData>
          <ExtendDateTime date="22 Sep" time="1:00pm" />
        </TableData>
        <TableData>
          <ButtonEdit onClick={onOpen}>Edit</ButtonEdit>
        </TableData>
      </TableRow>
    ))}
  </tbody>
)

export default TableRowVideos
