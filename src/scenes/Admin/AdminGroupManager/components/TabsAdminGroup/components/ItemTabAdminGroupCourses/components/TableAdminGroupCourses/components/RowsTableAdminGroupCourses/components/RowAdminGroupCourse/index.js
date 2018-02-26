import React from 'react';
import styled from 'styled-components';
// sub-components
import ModalCoursesSettings from '../ModalCoursesSettings';
//
import Button from 'base_components/RootButton';
import {TableRow, Td} from 'base_components/Tables';
import IconMenu from 'react-icons/lib/fa/align-justify';
import StatusCircle from 'base_components/StatusCircle';

// create a table data.
const TableDataGroupUser = ({children}) => <Td center>{children}</Td>;

// style IconMenuContainer styled component.
const IconMenuContainer = styled.i`
  color: #e3e3e3;
`;

// compose buttons
const ButtonCourseDetails = Button.extend`
  width: 125px;
`;

const RowAdminGroupCourse = () => (
  <TableRow>
    <td>
      <IconMenuContainer>
        <IconMenu />
      </IconMenuContainer>
    </td>
    <TableDataGroupUser>Communication and Culture</TableDataGroupUser>
    <TableDataGroupUser>22/03/17</TableDataGroupUser>
    <TableDataGroupUser>
      <StatusCircle state="active" />
    </TableDataGroupUser>
    <TableDataGroupUser>
      <div>
        <ModalCoursesSettings />
        <ButtonCourseDetails light lightBorder>
          Course Details
        </ButtonCourseDetails>
      </div>
    </TableDataGroupUser>
  </TableRow>
);

export default RowAdminGroupCourse;
