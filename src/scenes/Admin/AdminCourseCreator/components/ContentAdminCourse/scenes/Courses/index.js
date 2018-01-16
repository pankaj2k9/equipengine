import React from 'react';
// for our breadcrumbs
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic';
// component
import Breadcrumbs from 'base_components/Breadcrumbs';

const Courses = ({ match }) => {
  return (
    <div>
      <Breadcrumbs />
      <BreadcrumbsItem to={match.url}>Courses</BreadcrumbsItem>
    </div>
  );
};

export default Courses;
