import React from 'react';
import { Switch, Route } from 'react-router-dom';

/* import scenes in here*/
import Courses from 'scenes/Courses';
import NotFound from 'scenes/NotFound';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Courses} />
      <Route strict path="/courses" component={Courses} />
      {/* no routes match */}
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
