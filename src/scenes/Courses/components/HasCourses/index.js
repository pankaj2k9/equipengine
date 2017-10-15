import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

// for our code splitting and loader
import Loadable from 'react-loadable';
import Loader from 'base_components/Loader';

// for our breadcrumbs
import Breadcrumbs from 'base_components/Breadcrumbs';
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic';

import ListCourses from './components/ListCourses';

const AsyncCourse = Loadable({
  loader: () => import('scenes/Courses/scenes/Course'),
  loading: Loader, // before this component gets loaded, we will render first this Loader component.
  timeout: 10000
});

const HasCourses = ({ courses, match }) => {
  return (
    <div>
      <Breadcrumbs courses={courses} match={match} />
      <BreadcrumbsItem to={match.url}>Courses</BreadcrumbsItem>
      <Route
        exact
        path={match.url}
        component={_ => <ListCourses courses={courses} />}
      />
      <Route
        path={`${match.url}/:id`}
        render={props => <AsyncCourse {...props} courses={courses} />}
      />
    </div>
  );
};

HasCourses.propTypes = {
  courses: PropTypes.array,
  match: PropTypes.object.isRequired
};

export default HasCourses;
