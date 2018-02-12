import React from 'react';
import PropTypes from 'prop-types';
//
import Menu from '../Menu';
import Link from 'base_components/Link';

// this is for public other link
const OtherPanelLinks = () => (
  <div className="Sidebar__body__otherPages Sidebar__body__otherPages--settings">
    <Menu>
      <li className="Sidebar__item">
        <Link text="Groups" url="/groups" />
      </li>
      <li className="Sidebar__item">
        <Link text="Settings" url="/settings" />
      </li>
    </Menu>
  </div>
);

export default OtherPanelLinks;
