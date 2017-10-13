import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic';

/* import base_components here*/
import Loader from 'base_components/Loader';

/* create our async component in here
 * this will optimize the loading of components of our app
 * dynamically importing our scenes here*/
const AsyncCourses = Loadable({
  loader: () => import('scenes/Courses'),
  loading: Loader, // before this component gets loaded, we will render first this Loader component.
  timeout: 10000
});

const AsyncNotFound = Loadable({
  loader: () => import('scenes/NotFound'),
  loading: Loader,
  timeout: 10000
});

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={AsyncCourses} />
      <Route strict path="/courses" component={AsyncCourses} />
      {/* no routes match */}
      <Route component={AsyncNotFound} />
    </Switch>
  );
};

export default Routes;

/* const delay = Component =>
 *   new Promise(resolve => {
 *     setTimeout(() => resolve(Component), 15000);
 *   });*/
