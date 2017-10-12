import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './styles.css';

const RowLink = ({ text }) => {
  return (
    <Link className="RowLink" to="/messages">
      {text}
    </Link>
  );
};

RowLink.propTypes = {
  text: PropTypes.string.isRequired
};

export default RowLink;
