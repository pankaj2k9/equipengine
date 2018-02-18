import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { identical } from 'ramda';
//
import LogoContainer from 'base_components/LogoContainer';
import MainPanelLinks from './components/MainPanelLinks';
import TeacherPanelLinks from './components/TeacherPanelLinks';
// assets
import './styles.css';

const Sidebar = ({ isOpen, onCloseSidebar, accountType, pathname }) => {
  const browseGroupPath = '/secure/browse-groups';
  // when the isOpen props is true, add other classname on sidebar
  const sidebarClassnames = classNames('Sidebar', { isOpen });

  return (
    <div
      onClick={onCloseSidebar}
      className={sidebarClassnames}
      style={identical(pathname, browseGroupPath) ? { height: 0 } : undefined}
    >
      <div className="Sidebar__inner">
        <LogoContainer />
        <div
          className="Sidebar__body"
          style={
            identical(pathname, browseGroupPath)
              ? { display: 'none' }
              : undefined
          }
        >
          >
          <MainPanelLinks accountType={accountType} />
          {identical(accountType, 'Teacher') && <TeacherPanelLinks />}
        </div>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  onCloseSidebar: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  accountType: PropTypes.string.isRequired,
  pathname: PropTypes.string.isRequired
};

export default Sidebar;
