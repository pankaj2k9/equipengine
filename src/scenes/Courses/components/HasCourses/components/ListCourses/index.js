import React from 'react';
import PropTypes from 'prop-types';

import TutorialsCompleted from './components/TutorialsCompleted';
import LinkButton from 'base_components/LinkButton';
import List, { ListRow, ListRowLeft, ListRowRight } from 'base_components/List';

import './styles.css';

const ListCourses = ({ courses }) => {
  const listCourses = courses.map((course, i) => {
    return (
      <ListRow key={i}>
        <ListRowLeft>
          <p>{course.title}</p>
          <p>{course.subTitle}</p>
        </ListRowLeft>
        <ListRowRight className="ListCourses__right">
          <TutorialsCompleted />
          <LinkButton text="View" url={'/courses/' + course.url} />
        </ListRowRight>
      </ListRow>
    );
  });
  return <List className="ListCourses">{listCourses}</List>;
};

ListCourses.propTypes = {
  courses: PropTypes.array
};

export default ListCourses;
