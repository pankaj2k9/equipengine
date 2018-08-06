import React from "react"

import Breadcrumbs from "base_components/Breadcrumbs"
import { MainInnerContainer, MainLeft, MainRight } from "base_components/Main"
import TableFiles from "base_components/TableFiles"
import SearchBar from "base_components/RootSearchBar"

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

const Files = () => (
  <div>
    <Breadcrumbs
      items={[
        {
          // TODO change to /secure/groupId/files if it makes sense
          to: "/secure/files",
          label: "Files"
        }
      ]}
    />
    <MainInnerContainer>
      <MainLeft>
        <TableFiles files={files} />
      </MainLeft>
      <MainRight>
        <SearchBar placeholder="Search files" />
      </MainRight>
    </MainInnerContainer>
  </div>
)

export default Files
