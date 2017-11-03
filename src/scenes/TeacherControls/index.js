import React from 'react';
import subscribeToCourses from './hoc/subscribeToCourses';

const TeacherControls = ({ courses }) => (
  <FilterableTableCourse courses={courses} />
);

export const FilterableTableCourse = ({ courses }) => {
  const listCourses = courses.map((course, i) => {
    return <li key={i}>{course.title}</li>;
  });

  return (
    <div>
      <ul>{listCourses}</ul>
    </div>
  );
};

export default subscribeToCourses(TeacherControls);
