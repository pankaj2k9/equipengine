import React from 'react';
import PropTypes from 'prop-types';

const Link = ({ text, url }) => {
  return <a href={url}>{text}</a>;
};

Link.propTypes = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default Link;
