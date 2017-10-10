import React from 'react';
import PropTypes from 'prop-types';

const UserAvatar = ({ image }) => {
  return (
    <img
      alt="User Avatar"
      src={image}
      style={{
        height: 35,
        width: 35,
        borderRadius: '50%'
      }}
    />
  );
};

UserAvatar.propTypes = {
  image: PropTypes.string.isRequired
};

export default UserAvatar;
