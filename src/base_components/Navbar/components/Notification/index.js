import React from 'react';
import PropTypes from 'prop-types';

import PopoverNoti from './components/PopoverNoti';
import PopoverMessage from './components/PopoverMessage';
import Profile from './components/Profile';
import avatar from 'resources/images/user.png';
import './styles.css';

const Notification = () => {
  return (
    <div className="Notification">
      <PopoverNoti />
      <PopoverMessage />
      <Profile userName="Jane Doe" avatar={avatar} />
    </div>
  );
};

export default Notification;
