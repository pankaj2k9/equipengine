import React, { Fragment } from "react"
import styled from "styled-components"
// components
import Form from "base_components/RootForm"
import Button from "base_components/RootButton"
// styles
import ContainerFlex from "base_components/ContainerFlex"
import ButtonUpload from "base_components/ButtonUpload"
import Tables, { TableRow, Td, Th } from "base_components/Tables"
// resourses
import IconClose from "react-icons/lib/md/close"
import IconDownload from "react-icons/lib/md/file-download"

const StyledRow = styled(TableRow)`
  height: 40px;
`

const ItemTabBasics = () => (
  <Fragment>
    <Form>
      <ContainerFlex justifyContent="flex-end">
        <ButtonUpload />
      </ContainerFlex>
      <Tables>
        <Th>Name</Th>
        <Th>Date added</Th>
        <Th />
        <StyledRow>
          <Td>some1.pdf</Td>
          <Td>22 April 17</Td>
          <Td>
            <IconDownload fontSize={25} />
            <IconClose fontSize={25} />
          </Td>
        </StyledRow>
        <StyledRow>
          <Td>some1.pdf</Td>
          <Td>22 April 17</Td>
          <Td>
            <IconDownload fontSize={25} />
            <IconClose fontSize={25} />
          </Td>
        </StyledRow>
      </Tables>
      <Button>Save</Button>
    </Form>
  </Fragment>
)

export default ItemTabBasics
