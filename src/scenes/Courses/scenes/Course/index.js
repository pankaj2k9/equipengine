import React from 'react';
import PropTypes from 'prop-types';
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic';
import { split, join, pipe } from 'ramda';

const Course = ({ courses, match }) => {
  // cachce variables
  const paramId = match.params.id;

  // create the course title based on the url params
  const courseTitle = pipe(split('-'), join(' '))(paramId);

  // retrieve specific course based on the params id value
  const course = courses.filter(course => course.id == paramId)[0];

  return (
    <div>
      <BreadcrumbsItem to={'/courses/course'}>{courseTitle}</BreadcrumbsItem>
    </div>
  );
};

Course.propTypes = {
  courses: PropTypes.array,
  match: PropTypes.object.isRequired
};

export default Course;
