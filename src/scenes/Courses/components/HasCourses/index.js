import React from 'react';
import PropTypes from 'prop-types';

import ListCourses from './components/ListCourses';
import Box from 'base_components/Box';

const HasCourses = ({ courses }) => {
  return (
    <Box>
      <ListCourses courses={courses} />
    </Box>
  );
};

HasCourses.propTypes = {
  courses: PropTypes.array
};

export default HasCourses;
