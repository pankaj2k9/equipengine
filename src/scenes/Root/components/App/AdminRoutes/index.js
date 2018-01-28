import React from 'react';
import { Route } from 'react-router-dom';
//
import ErrorBoundary from 'base_components/ErrorBoundary';
/* for code splitting - loadable */
import Loadable from 'react-loadable';
import Loader from 'base_components/Loader';

//------------------------- ADMIN PANEL COMPONENT -------------------------------//
const AsyncAdminGroupManager = Loadable({
  loader: () => import('scenes/Admin/AdminGroupManager'),
  loading: Loader,
  timeout: 10000
});

const AsyncAdminUserManager = Loadable({
  loader: () => import('scenes/Admin/AdminUserManager'),
  loading: Loader,
  timeout: 10000
});

const AsyncAdminCourseCreator = Loadable({
  loader: () => import('scenes/Admin/AdminCourseCreator'),
  loading: Loader,
  timeout: 10000
});

const AdminRoutes = () => (
  <div>
    {/*-------------------------- ADMIN PANEL PAGES ---------------------*/}
    <Route
      strict
      path="/admin/group-manager"
      component={props => {
        return (
          <ErrorBoundary errMsg="Something went wrong in displaying the admin group manager page.">
            <AsyncAdminGroupManager {...props} />
          </ErrorBoundary>
        );
      }}
    />
    <Route
      strict
      path="/admin/user-manager"
      component={props => {
        return (
          <ErrorBoundary errMsg="Something went wrong in displaying the admin user manager page.">
            <AsyncAdminUserManager {...props} />
          </ErrorBoundary>
        );
      }}
    />
    <Route
      strict
      path="/admin/course-creator"
      render={props => {
        return (
          <ErrorBoundary errMsg="Something went wrong in displaying the admin user manager page.">
            <AsyncAdminCourseCreator {...props} />
          </ErrorBoundary>
        );
      }}
    />
  </div>
);

export default AdminRoutes;
