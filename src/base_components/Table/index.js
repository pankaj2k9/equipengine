import React from "react"
import { SortingState, IntegratedSorting } from "@devexpress/dx-react-grid"
import {
  Grid,
  Table as GridTable,
  TableHeaderRow
} from "@devexpress/dx-react-grid-bootstrap3"

import { Root } from "./elements"
import ActivityCellFormatter from "./ActivityCellFormatter"
import DateCellFormatter from "./DateCellFormatter"
import DiscussionCellFormatter from "./DiscussionCellFormatter/"
import DownloadCellFormatter from "./DownloadCellFormatter"
import SubtitledTextCellFormatter from "./SubtitledTextCellFormatter"
import UserCountCellFormatter from "./UserCountCellFormatter"

const skipColumnLabelIfNoColumnTitle = ({ column, ...props }) =>
  column.title ? (
    <TableHeaderRow.Cell column={column} {...props} />
  ) : (
    <TableHeaderRow.Cell />
  )

const Table = ({ rows, columns, sorting, rowFontSize, headerRowFontSize }) => {
  const defaultColumnsSorting = []
  const columnExtensions = []
  const columnWidths = []
  const sortFunctions = []

  columns.forEach(column => {
    const {
      name,
      align,
      defaultSorting,
      sortFunction,
      wordWrapDisabled,
      width
    } = column

    // Cell align and word wrap
    columnExtensions.push({
      columnName: name,
      wordWrapEnabled: !wordWrapDisabled,
      align: align || "left"
    })

    // Sorting
    if (defaultSorting) {
      defaultColumnsSorting.push({
        columnName: name,
        direction: defaultSorting
      })
    }
    if (sortFunction) {
      sortFunctions.push({
        columnName: name,
        compare: sortFunction
      })
    }

    // Column width
    if (width) {
      columnWidths.push({
        columnName: name,
        width
      })
    }
  })

  return (
    <Root
      columnsWidths={columnWidths}
      rowFontSize={rowFontSize}
      headerRowFontSize={headerRowFontSize}
    >
      <Grid columns={columns} rows={rows}>
        {sorting && <SortingState defaultSorting={defaultColumnsSorting} />}
        {sorting && <IntegratedSorting columnExtensions={sortFunctions} />}

        <GridTable columnExtensions={columnExtensions} />

        <TableHeaderRow
          cellComponent={skipColumnLabelIfNoColumnTitle}
          showSortingControls={!!sorting}
        />
      </Grid>
    </Root>
  )
}

export {
  Table as default,
  ActivityCellFormatter,
  DateCellFormatter,
  DiscussionCellFormatter,
  DownloadCellFormatter,
  SubtitledTextCellFormatter,
  UserCountCellFormatter
}
