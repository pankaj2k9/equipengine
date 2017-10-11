import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import LogoContainer from 'base_components/LogoContainer';
import Menu from './components/Menu';
import DropdownGroups from './components/DropdownGroups';
import Link from 'base_components/Link';
import './styles.css';

const Sidebar = ({ isOpen, onCloseSidebar }) => {
  // construct our mainPages links that we will integrate on our sidebar
  const mainPagesLink = (
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

  // otherPages links
  const otherPagesLink = (
    <Menu>
      <li className="Sidebar__item">
        <Link text="Groups" url="/groups" />
      </li>
      <li className="Sidebar__item">
        <Link text="Settings" url="/settings" />
      </li>
    </Menu>
  );

  // when the isOpen props is true, add other classname on sidebar
  const sidebarClassnames = classNames('Sidebar', { isOpen });

  return (
    <div
      onClick={onCloseSidebar}
      style={{ zIndex: isOpen && 1 }}
      className={sidebarClassnames}
    >
      <div className="Sidebar__content">
        <LogoContainer />
        <div className="Sidebar__body">
          <div className="Sidebar__body__mainPages">
            <DropdownGroups />
            {
              // we will put here the links that we created
              mainPagesLink
            }
          </div>
          <div className="Sidebar__body__otherPages">{otherPagesLink}</div>
        </div>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  onCloseSidebar: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired
};

export default Sidebar;
