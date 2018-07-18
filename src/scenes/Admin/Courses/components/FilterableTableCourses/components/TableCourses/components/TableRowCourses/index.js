import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import IconUser from "react-icons/lib/fa/user"
//
import { TableRow, Td } from "base_components/Tables"
import LinkButton from "base_components/LinkButton"
import ContainerFlex from "base_components/ContainerFlex"

// Table data for name column
const TableDataName = styled.td`
  p {
    font-size: 16px;
    margin-bottom: 0.4em;
  }

  span {
    color: #9fa6ad;
    max-width: 350px;
    display: inline-block;
  }
`

// container for active user
const ContainerActiveUser = ContainerFlex.extend`
  justify-content: center;

  i {
    color: #9fa6ad;
    margin-right: 0.3em;
  }
`

// for text
const Text = styled.span`
  font-size: 16px;
`

const TableData = Td.extend`
  @media screen and (min-width: 768px) {
    &:last-child {
      width: 40%;
    }
  }
`

const TableRowCourses = ({ match }) => (
  <tbody>
    <TableRow>
      <TableDataName>
        <p>Communication and Culture</p>
        <span>
          This group is for people who are in level 3 pathway in the Connect
          Program.
        </span>
      </TableDataName>
      <TableData center>
        <Text>19 March 17</Text>
      </TableData>
      <TableData center>
        <ContainerActiveUser isAlignCenter>
          <i>
            <IconUser />
          </i>
          <Text>33</Text>
        </ContainerActiveUser>
      </TableData>
      <TableData center>
        <Text>8</Text>
      </TableData>
      <TableData>
        <LinkButton
          url={`${match.url}/communication-and-culture`}
          text="Details"
        />
      </TableData>
    </TableRow>
    <TableRow>
      <TableDataName>
        <p>Language and Culture</p>
        <span>
          This group is for people who are in level 3 pathway in the Connect
          Program.
        </span>
      </TableDataName>
      <TableData center>
        <Text>19 March 17</Text>
      </TableData>
      <TableData center>
        <ContainerActiveUser isAlignCenter>
          <i>
            <IconUser />
          </i>
          <Text>44</Text>
        </ContainerActiveUser>
      </TableData>
      <TableData center>
        <Text>5</Text>
      </TableData>
      <TableData>
        <LinkButton url={`${match.url}/language-and-culture`} text="Details" />
      </TableData>
    </TableRow>
  </tbody>
)

TableRowCourses.propTypes = {
  match: PropTypes.object.isRequired
}

export default TableRowCourses
