import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { TableRow } from 'base_components/Tables';

// for table row data.
// TODO: we need to turn it into styled component.
const TableRowCourseTd = ({ children }) => (
  <td
    style={{
      fontSize: 14,
      textAlign: 'left',
      marginTop: '0.7em',
      verticalAlign: 'middle'
    }}
  >
    {children}
  </td>
);

// for table row course.
const DateSpan = styled.span`
  color: #7e7e7e;
  display: block;
  width: 70px;
`;

const TableRowCourse = ({ course }) => (
  <TableRow>
    <TableRowCourseTd>
      <DateSpan>{`${course.date.day} ${course.date.time}`}</DateSpan>
    </TableRowCourseTd>
    <TableRowCourseTd>{course.course}</TableRowCourseTd>
    <TableRowCourseTd>{course.lesson}</TableRowCourseTd>
    <TableRowCourseTd>{course.person.name}</TableRowCourseTd>
    <TableRowCourseTd>{course.lastAction}</TableRowCourseTd>
  </TableRow>
);

TableRowCourse.propTypes = {
  course: PropTypes.object.isRequired
};

export default TableRowCourse;
