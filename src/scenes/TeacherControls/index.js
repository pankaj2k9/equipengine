import React from 'react';
import PropTypes from 'prop-types';

const TeacherControls = ({ courses }) => {
  return <FilterableTableCourse courses={courses} />;
};

TeacherControls.propTypes = {
  courses: PropTypes.array.isRequired
};

export const FilterableTableCourse = ({ courses }) => {
  return (
    <div>
      {courses.map((course, i) => {
        return <li key={i}>{course}</li>;
      })}
    </div>
  );
};

export default TeacherControls;
