import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './styles.css';

const LinkButton = ({ text, url }) => {
  return (
    <Link className="LinkButton" to={url}>
      {text}
    </Link>
  );
};

LinkButton.propTypes = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default LinkButton;
