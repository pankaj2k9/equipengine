import React from "react"
import { SortingState, IntegratedSorting } from "@devexpress/dx-react-grid"
import {
  Grid,
  Table as GridTable,
  TableHeaderRow
} from "@devexpress/dx-react-grid-bootstrap3"

import { Root } from "./elements"
import ActivityCellFormatter from "./ActivityCellFormatter"
import CloseCellFormatter from "./CloseCellFormatter"
import DateCellFormatter from "./DateCellFormatter"
import DetailsButtonCellFormatter from "./DetailsButtonCellFormatter"
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

const Table = ({
  columns,
  headerRowFontSize,
  rows,
  rowFontSize,
  sorting,
  tableLayout,
  verticalAlign
}) => {
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
      headerRowFontSize={headerRowFontSize}
      rowFontSize={rowFontSize}
      tableLayout={tableLayout}
      verticalAlign={verticalAlign}
    >
      <Grid
        columns={Array.isArray(columns) ? columns : []}
        rows={Array.isArray(rows) ? rows : []}
      >
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
  CloseCellFormatter,
  DateCellFormatter,
  DetailsButtonCellFormatter,
  DiscussionCellFormatter,
  DownloadCellFormatter,
  SubtitledTextCellFormatter,
  UserCountCellFormatter
}
