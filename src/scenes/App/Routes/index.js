import React from 'react';
import { Switch, Route } from 'react-router-dom';

/* import scenes in here*/
import Courses from 'scenes/Courses';
import Course from 'scenes/Course';
import NotFound from 'scenes/NotFound';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Courses} />
      <Route exact path="/courses" component={Courses} />
      <Route exact path="/courses/:courseTitle" component={Course} />
      {/* no routes match */}
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
