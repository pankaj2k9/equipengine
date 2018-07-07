import React from "react"
import PropTypes from "prop-types"
import Table, { DownloadCellFormatter } from "base_components/Table"

const NAME_COLUMN = "title"
const DATE_COLUMN = "date_added"
const DOWNLOAD_COLUMN = "download"

const columns = [
  {
    name: NAME_COLUMN,
    title: "Name"
  },
  {
    name: DATE_COLUMN,
    title: "Date Addded"
  },
  {
    name: DOWNLOAD_COLUMN,
    getCellValue: row => <DownloadCellFormatter />
  }
]

const filesToRows = files =>
  Array.isArray(files)
    ? files.map(file => ({
        [NAME_COLUMN]: file.file,
        [DATE_COLUMN]: file.date,
        [DOWNLOAD_COLUMN]: file
      }))
    : []

const TableFiles = ({ files }) => (
  <Table columns={columns} rows={filesToRows(files)} sorting />
)

TableFiles.propTypes = {
  files: PropTypes.array.isRequired
}

export default TableFiles
