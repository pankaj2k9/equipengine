import React from 'react';

import Popover from 'base_components/Popover';
import PopoverRow from 'base_components/Popover/components/PopoverRow';
import UserAvatar from 'base_components/UserAvatar';
import IconDown from 'react-icons/lib/fa/angle-down';
import './styles.css';

const Profile = ({ userName, avatar }) => {
  const popoverProfileContent = (
    <ul>
      <PopoverRow text="Sign out" />
      <PopoverRow text="Sign out" />
    </ul>
  );

  return (
    <div className="Profile">
      <p>{userName}</p>
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
