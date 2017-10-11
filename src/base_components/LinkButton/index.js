import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const LinkButton = ({ text, url }) => {
  return (
    <a className="LinkButton" href={url}>
      {text}
    </a>
  );
};

LinkButton.propTypes = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default LinkButton;
