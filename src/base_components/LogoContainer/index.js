import React from 'react';

import './styles.css';
import Logo from 'resources/images/logo.svg';
import { $textBoldColor } from 'shared/color.js';

const LogoContainer = () => {
  return (
    <div className="LogoContainer">
      <img alt="Logo" src={Logo} />
      <h1 style={{ color: $textBoldColor }}>EquipEngine</h1>
    </div>
  );
};

export default LogoContainer;
