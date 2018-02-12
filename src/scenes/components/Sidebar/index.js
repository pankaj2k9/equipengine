import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { identical } from 'ramda';
//
import LogoContainer from 'base_components/LogoContainer';
import MainPanelLinks from './components/MainPanelLinks';
import TeacherPanelLinks from './components/TeacherPanelLinks';
import SettingsPanelLinks from './components/SettingsPanelLinks';
// assets
import './styles.css';

const Sidebar = ({ isOpen, onCloseSidebar, accountType }) => {
  // when the isOpen props is true, add other classname on sidebar
  const sidebarClassnames = classNames('Sidebar', { isOpen });

  return (
    <div onClick={onCloseSidebar} className={sidebarClassnames}>
      <div className="Sidebar__inner">
        <LogoContainer />
        <div className="Sidebar__body">
          <MainPanelLinks />
          {identical(accountType, 'Student') ? (
            <SettingsPanelLinks />
          ) : (
            <TeacherPanelLinks />
          )}
        </div>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  onCloseSidebar: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  accountType: PropTypes.string.isRequired
};

export default Sidebar;
