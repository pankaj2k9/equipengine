import React, { Component } from "react"
import styled from "styled-components"

import modal from "hoc/modal"
import Button from "base_components/RootButton"
import Container from "base_components/Container"
import EditVideoModal from "../EditVideoModal"
import Table, { DateCellFormatter } from "base_components/Table"

const THUMBNAIL_COLUMN = "thumbnail_url"
const DATE_COLUMN = "created_at"
const TITLE_COLUMN = "title"
const LENGTH_COLUMN = "length"
const EDIT_COLUMN = "edit"

const Thumbnail = styled.img`
  width: 90px;
  height: 55px;
  border: 1px solid #979797;
  border-radius: 3px;
`

class TableVideos extends Component {
  state = {
    isOpen: false,
    video: null
  }

  columns = [
    {
      name: THUMBNAIL_COLUMN,
      getCellValue: row => <Thumbnail src={row[THUMBNAIL_COLUMN]} />
    },
    {
      name: TITLE_COLUMN,
      title: "Name"
    },
    {
      name: LENGTH_COLUMN,
      title: "Length"
    },
    {
      name: DATE_COLUMN,
      title: "Date Addded",
      getCellValue: row => (
        <DateCellFormatter date={new Date(row[DATE_COLUMN])} />
      )
    },
    {
      name: EDIT_COLUMN,
      align: "center",
      getCellValue: row => (
        <Button onClick={() => this.handleOpenEditModal(row)}>Edit</Button>
      )
    }
  ]

  handleOpenEditModal = video =>
    this.setState({
      isOpen: true,
      video
    })

  handleCloseEditModal = () =>
    this.setState({
      isOpen: false,
      video: null
    })

  render() {
    const { videos, onUpdate } = this.props
    const { video, isOpen } = this.state

    return (
      <Container>
        <Table columns={this.columns} rows={videos} />
        <EditVideoModal
          video={video}
          isOpen={isOpen}
          onClose={this.handleCloseEditModal}
          onSubmit={onUpdate}
        />
      </Container>
    )
  }
}

export default modal(TableVideos)
