import React from "react"

import modal from "hoc/modal"

import Container from "base_components/Container"
import Tables, { TableRow } from "base_components/Tables"

import EditVideoModal from "../EditVideoModal"
import TableRowVideos from "./components/TableRowVideos"

const ContainerTableVideos = Container.extend`
  .table-responsive {
    width: 100%;
  }
`

const videos = [
  {
    id: 1,
    name: "Teacher speaking to students",
    length: "00:25:03",
    date: "22 Sep 1:00pm"
  },
  {
    id: 2,
    name: "	More on teaching video",
    length: "00:25:03",
    date: "22 Sep 1:00pm"
  }
]

const TableVideos = ({
  onOpen: onOpenVideoModal,
  onClose: onCloseVideoModal,
  isOpen: isOpenVideoModal
}) => (
  <ContainerTableVideos>
    <EditVideoModal
      isOpen={isOpenVideoModal}
      onClose={onCloseVideoModal}
      onSubmit={() => {}}
    />
    <Tables>
      <thead>
        <TableRow>
          <th />
          <th>Name</th>
          <th>Length</th>
          <th>Date Added</th>
          <th />
        </TableRow>
      </thead>
      <TableRowVideos onOpen={onOpenVideoModal} videos={videos} />
    </Tables>
  </ContainerTableVideos>
)

export default modal(TableVideos)
