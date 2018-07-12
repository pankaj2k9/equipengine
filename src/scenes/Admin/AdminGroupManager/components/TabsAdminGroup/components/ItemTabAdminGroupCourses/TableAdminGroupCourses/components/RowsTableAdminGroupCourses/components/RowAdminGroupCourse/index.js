import React, { Fragment } from "react"
//
import styled from "styled-components"
//
import Button from "base_components/RootButton"
import { Td } from "base_components/Tables"
import IconMenu from "react-icons/lib/fa/align-justify"
import StatusCircle from "base_components/StatusCircle"
//
import ModalCoursesSettings from "../ModalCoursesSettings"

const TableDataGroupUser = ({ children }) => <Td center>{children}</Td>

const RowAdminGroupCourse = ({ className }) => (
  <Fragment>
    <td>
      <i className={`${className}__iconMenuContainer`}>
        <IconMenu />
      </i>
    </td>
    <TableDataGroupUser>Communication and Culture</TableDataGroupUser>
    <TableDataGroupUser>22/03/17</TableDataGroupUser>
    <TableDataGroupUser>
      <StatusCircle state="active" />
    </TableDataGroupUser>
    <TableDataGroupUser>
      <div className={`${className}__buttonsCell`}>
        <ModalCoursesSettings />
        <Button
          className={`${className}__buttonCourseDetail`}
          light
          lightBorder
        >
          Course Details
        </Button>
      </div>
    </TableDataGroupUser>
  </Fragment>
)

export default styled(RowAdminGroupCourse)`
  &__buttonsCell {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__buttonCourseDetail {
    width: 125px;
  }

  &__iconMenuContainer {
    color: #e3e3e3;
  }
`
