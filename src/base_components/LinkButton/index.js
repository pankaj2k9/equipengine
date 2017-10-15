import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './styles.css';

const LinkButton = ({ style, text, url }) => {
  return (
    <Link style={style} className="LinkButton" to={url}>
      {text}
    </Link>
  );
};

LinkButton.propTypes = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  style: PropTypes.object
};

export default LinkButton;
