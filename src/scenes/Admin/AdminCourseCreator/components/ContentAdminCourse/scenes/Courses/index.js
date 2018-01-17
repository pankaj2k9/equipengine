import React from 'react';
import styled from 'styled-components';
// for our breadcrumbs
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic';
// component
import Breadcrumbs from 'base_components/Breadcrumbs';
import FilterableTableCourses from './components/FilterableTableCourses';

const ContainerCourses = styled.div`
  @media screen and (min-width: 768px) {
    margin-top: 53px;
  }
`;

const Courses = ({ match }) => {
  return (
    <ContainerCourses>
      <Breadcrumbs />
      <BreadcrumbsItem to={match.url}>Courses</BreadcrumbsItem>
      <FilterableTableCourses />
    </ContainerCourses>
  );
};

export default Courses;
