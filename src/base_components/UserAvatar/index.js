import React from 'react';
import PropTypes from 'prop-types';

const UserAvatar = ({ image }) => (
  <img alt="user avatar" style={userAvatarStyle} src={image} />
);

const userAvatarStyle = {
  height: 35,
  width: 35,
  borderRadius: '50%',
  objectPosition: 'top',
  objectFit: 'cover'
};

UserAvatar.propTypes = {
  image: PropTypes.string.isRequired
};

export default UserAvatar;
