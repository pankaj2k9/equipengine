import React from 'react';
//
import DropdownGroups from '../DropdownGroups';
import Menu from '../Menu';
import Link from 'base_components/Link';

const MainPagesLink = () => (
  <div className="Sidebar__body__mainPages">
    <DropdownGroups />
    <Menu>
      <li className="Sidebar__item">
        <Link text="Dashboard" url="/" />
      </li>
      <li className="Sidebar__item">
        <Link isStrict={true} text="Courses" url="/courses" />
      </li>
      <li className="Sidebar__item">
        <Link text="Files" url="/files" />
      </li>
      <li className="Sidebar__item">
        <Link text="People" url="/people" />
      </li>
    </Menu>
  </div>
);

export default MainPagesLink;
