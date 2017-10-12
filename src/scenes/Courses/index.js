import React from 'react';
import PropTypes from 'prop-types';

import subscribingOnCourses from './hoc';
import NoCourses from './components/NoCourses';
import HasCourses from './components/HasCourses';

const Courses = ({ courses }) => {
  /* if there is courses render the HasCourses*/
  if (courses.length) {
    return <HasCourses courses={courses} />;
  }

  // else no courses
  return <NoCourses />;
};

Courses.propTypes = {
  courses: PropTypes.array
};

export default subscribingOnCourses(Courses);
