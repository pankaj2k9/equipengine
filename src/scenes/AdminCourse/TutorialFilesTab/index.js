import React, { Fragment } from "react"
//
import ContainerFlex from "base_components/ContainerFlex"
import ButtonUpload from "base_components/ButtonUpload"
import TableFiles from "base_components/TableFiles"

// test data
const files = [
  {
    id: "ysdjfk",
    title: "Submissions instructions.pdf",
    date: "22 April 17"
  },
  {
    id: "yskjdksf",
    title: "Showing culture.ptt",
    date: "19 March 17"
  }
]

const TutorialFilesTab = () => (
  <Fragment>
    <ContainerFlex justifyContent="flex-end">
      <ButtonUpload />
    </ContainerFlex>
    <TableFiles files={files} />
  </Fragment>
)

export default TutorialFilesTab
