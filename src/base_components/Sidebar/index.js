import React from 'react';
import PropTypes from 'prop-types';

import LogoContainer from 'base_components/LogoContainer';
import Menu from './components/Menu';
import DropdownGroups from './components/DropdownGroups';
import Link from 'base_components/Link';
import './styles.css';

const Sidebar = () => {
  // construct our mainPages elements
  const mainPages = (
    <Menu>
      <li className="Sidebar__item">
        <Link text="Dashboard" url="/" />
      </li>
      <li className="Sidebar__item">
        <Link text="Courses" url="/courses" />
      </li>
      <li className="Sidebar__item">
        <Link text="Files" url="/files" />
      </li>
      <li className="Sidebar__item">
        <Link text="People" url="/people" />
      </li>
    </Menu>
  );

  // otherPages
  const otherPages = (
    <Menu>
      <li className="Sidebar__item">
        <Link text="Groups" url="/groups" />
      </li>
      <li className="Sidebar__item">
        <Link text="Settings" url="/settings" />
      </li>
    </Menu>
  );

  return (
    <div className="Sidebar">
      <LogoContainer />
      <div className="Sidebar__body">
        <div className="Sidebar__body__mainPages">
          <DropdownGroups />
          {mainPages}
        </div>
        <div className="Sidebar__body__otherPages">{otherPages}</div>
      </div>
    </div>
  );
};

export default Sidebar;
