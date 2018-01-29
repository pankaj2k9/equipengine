import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { identical, isEmpty } from 'ramda';

// base_components
import Main from 'base_components/Main';

/* for code splitting - loadable */
import Loadable from 'react-loadable';
import Loader from 'base_components/Loader';

// import all routes
import PublicRoutes from '../PublicRoutes';
import PrivateRoutes from '../PrivateRoutes';
import TeacherRoutes from '../TeacherRoutes';
import AdminRoutes from '../AdminRoutes';

/* create our async component in here
 * this will optimize the loading of components of our app
 * dynamically importing our scenes here*/
const AsyncMainBars = Loadable({
  loader: () => import('base_components/SidebarTransition'),
  loading: () => null, // before this component gets loaded, we will render first this Loader component.
  timeout: 10000
});

const AsyncNavbarAdmin = Loadable({
  loader: () => import('base_components/NavbarAdmin'),
  loading: Loader,
  timeout: 10000
});

/**
 * InitRoutes component will render either Public or Private routes based on the type.
 * If the type is empty, we need to render public. Else render private.
 */
const InitRoutes = ({ type }) => (
  <div>
    {isEmpty(type) ? (
      <PublicRoutes />
    ) : (
      <div>
        {/*-------------------------- PRIVATE COMPONENTS ---------------------*/}
        <Route
          path="/"
          render={() =>
            // conditional rendering.
            identical(type, 'Student') || identical(type, 'Teacher') ? (
              <AsyncMainBars />
            ) : (
              <AsyncNavbarAdmin />
            )}
        />
        <Main type={type}>
          <PrivateRoutes />
          <TeacherRoutes />
          <AdminRoutes />
        </Main>
      </div>
    )}
  </div>
);

InitRoutes.propTypes = {
  type: PropTypes.string
};

export default InitRoutes;