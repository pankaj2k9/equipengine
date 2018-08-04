import React, { Component } from "react"
import PropTypes from "prop-types"
import Table, {
  CloseCellFormatter,
  DownloadCellFormatter
} from "base_components/Table"

const NAME_COLUMN = "title"
const DATE_COLUMN = "date_added"
const DOWNLOAD_COLUMN = "download"
const CLOSE_COLUMN = "close"

const getColumns = removeFile => [
  {
    name: NAME_COLUMN,
    title: "Name",
    width: "50%"
  },
  {
    name: DATE_COLUMN,
    title: "Date Addded",
    width: "25%"
  },
  {
    name: DOWNLOAD_COLUMN,
    width: "20%",
    getCellValue: row => <DownloadCellFormatter />
  },
  {
    name: CLOSE_COLUMN,
    width: "5%",
    getCellValue: row => (
      <CloseCellFormatter onClose={() => removeFile(row.download.id)} />
    )
  }
]

const filesToRows = files =>
  Array.isArray(files)
    ? files.map(file => ({
        [NAME_COLUMN]: file.title,
        [DATE_COLUMN]: file.date,
        [DOWNLOAD_COLUMN]: file
      }))
    : []

class TableFiles extends Component {
  state = {
    columns: getColumns(this.props.removeFile)
  }

  render() {
    const { files } = this.props

    return (
      <Table
        tableLayout="unset"
        columns={this.state.columns}
        rows={filesToRows(files)}
        sorting
      />
    )
  }
}

TableFiles.propTypes = {
  files: PropTypes.array.isRequired
}

export default TableFiles
