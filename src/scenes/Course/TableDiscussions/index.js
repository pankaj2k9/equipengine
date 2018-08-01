import PropTypes from "prop-types"
import React from "react"

import Table, {
  ActivityCellFormatter,
  DiscussionCellFormatter
} from "base_components/Table"

const ID_COLUMN = "id"
const TITLE_COLUMN = "title"
const DATE_COLUMN = "date_added"
const COMMENT_COUNT_COLUMN = "comment_count"
const LATEST_ACTIVITY_COLUMN = "latest_activity"

const discussionToRow = discussion => ({
  [ID_COLUMN]: discussion.id,
  [TITLE_COLUMN]: discussion,
  [DATE_COLUMN]: discussion.dateAdded,
  [COMMENT_COUNT_COLUMN]: discussion.comments.length,
  [LATEST_ACTIVITY_COLUMN]: discussion.activities[0]
})

const TableDiscussions = ({ discussions, onSelect }) => {
  const columns = [
    {
      name: TITLE_COLUMN,
      getCellValue: row => (
        <DiscussionCellFormatter
          discussion={row[TITLE_COLUMN]}
          onClick={() => onSelect(row[ID_COLUMN])}
        />
      ),
      width: "45%"
    },
    {
      name: DATE_COLUMN,
      title: "Date added",
      defaultSorting: "asc",
      align: "center",
      width: "20%"
    },
    {
      name: COMMENT_COUNT_COLUMN,
      title: "Comment",
      align: "center",
      width: "15%"
    },
    {
      name: LATEST_ACTIVITY_COLUMN,
      title: "Latest activity",
      align: "center",
      width: "20%",
      getCellValue: row => (
        <ActivityCellFormatter activity={row[LATEST_ACTIVITY_COLUMN]} />
      ),
      sortFunction: (
        { props: { activity: activity1 } },
        { props: { activity: activity2 } }
      ) => {
        const date1 = activity1.date.day
        const date2 = activity2.date.day

        return date1 < date2 ? -1 : date1 > date2 ? 1 : 0
      }
    }
  ]

  return (
    <Table
      rowFontSize="16px"
      columns={columns}
      rows={discussions ? discussions.map(discussionToRow) : []}
      sorting
    />
  )
}

TableDiscussions.propTypes = {
  discussions: PropTypes.array.isRequired
}

export default TableDiscussions
