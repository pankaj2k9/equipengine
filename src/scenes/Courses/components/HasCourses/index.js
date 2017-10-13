import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import Breadcrumbs from 'base_components/Breadcrumbs';
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic';

import ListCourses from './components/ListCourses';
import Box from 'base_components/Box';
import Course from '../../scenes/Course';

const HasCourses = ({ courses, match }) => {
  return (
    <div>
      <Breadcrumbs courses={courses} match={match} />
      <Box>
        <BreadcrumbsItem to={match.url}>Courses</BreadcrumbsItem>
        <Route
          exact
          path={match.url}
          component={_ => <ListCourses courses={courses} />}
        />
        <Route
          path={`${match.url}/:id`}
          component={props => <Course {...props} courses={courses} />}
        />
      </Box>
    </div>
  );
};

HasCourses.propTypes = {
  courses: PropTypes.array,
  match: PropTypes.object.isRequired
};

export default HasCourses;
