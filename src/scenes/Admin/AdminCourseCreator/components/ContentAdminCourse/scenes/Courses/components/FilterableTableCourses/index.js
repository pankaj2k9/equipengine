import React from 'react';
import styled from 'styled-components';

import HeaderTableCourses from './components/HeaderTableCourses';
import TableCourses from './components/TableCourses';

const FilterableTableCourses = () => (
  <div>
    <HeaderTableCourses />
    <TableCourses />
  </div>
);

export default FilterableTableCourses;
