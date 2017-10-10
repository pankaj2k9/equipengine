import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const RowLink = ({ text }) => {
  return (
    <a className="RowLink" href="#">
      {text}
    </a>
  );
};

RowLink.propTypes = {
  text: PropTypes.string.isRequired
};

export default RowLink;
