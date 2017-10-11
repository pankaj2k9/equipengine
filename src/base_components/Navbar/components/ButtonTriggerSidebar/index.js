import React from 'react';
import PropTypes from 'prop-types';
import IconBurger from 'react-icons/lib/fa/align-justify';

import './styles.css';

const ButtonTriggerSidebar = () => {
  return (
    <button className="ButtonTriggerSidebar" type="button">
      <IconBurger />
    </button>
  );
};

export default ButtonTriggerSidebar;
