import React from 'react';
import PropTypes from 'prop-types';

import Popover from 'base_components/Popover';
import UserAvatar from 'base_components/UserAvatar';
import IconDown from 'react-icons/lib/fa/angle-down';
import { $textLightColor } from 'shared/color.js';

const Profile = ({ userName, avatar }) => {
  const popoverProfileContent = <p>profile popover</p>;

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <p
        style={{
          margin: '0 10px 0 0',
          fontSize: 12,
          fontWeight: '800',
          color: $textLightColor
        }}
      >
        {userName}
      </p>
      <UserAvatar image={avatar} />
      <Popover
        buttonIcon={<IconDown />}
        buttonStyle={{
          fontSize: '1.5rem'
        }}
        popoverContent={popoverProfileContent}
      />
    </div>
  );
};

export default Profile;
