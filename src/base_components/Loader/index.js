import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const Loader = ({ isLoading, error, timedOut }) => {
  // loading component that didn't reach the time out value.
  if (isLoading && !timedOut) {
    return <h4 className="Loader">Please wait...</h4>;
  } else if (timedOut) {
    // if the load time gets too long and match the given timeOut value, return this component
    return (
      <h4 className="Loader--isTimedOut">
        Something took longer than normal. Try to refresh the page.
      </h4>
    );
  }
  // Handle the error state
  if (error) {
    return (
      <h4 className="Loader--isError">
        Sorry, there was a problem loading the page.
      </h4>
    );
  }
  //
  return null;
};

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.object,
  timedOut: PropTypes.bool
};

export default Loader;
