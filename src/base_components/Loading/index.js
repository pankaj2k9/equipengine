import React from 'react';
import PropTypes from 'prop-types';

const Loader = ({ isLoading, error }) => {
  if (isLoading) {
    return <div className="Loading">Loading...</div>;
  } else if (error) {
    // Handle the error state
    return (
      <div className="Loading--error">
        Sorry, there was a problem loading the page.
      </div>
    );
  } else {
    return null;
  }
};

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.object.isRequired
};

export default Loader;
