import React from 'react';
import PropTypes from 'prop-types';
import { identical } from 'ramda';
//
import DropdownGroups from '../DropdownGroups';
import Menu from '../Menu';
import Link from 'base_components/Link';

const isStudentType = type => identical(type, 'Student');

const MainPanelLinks = ({ accountType }) => (
  <div className="Sidebar__body__mainPages">
    <DropdownGroups />
    <Menu>
      <li className="Sidebar__item">
        <Link text="Dashboard" url="/secure/dashboard" />
      </li>
      <li className="Sidebar__item">
        <Link isStrict={true} text="Courses" url="/secure/courses" />
      </li>
      <li className="Sidebar__item">
        <Link
          text="Files"
          url={
            isStudentType(accountType)
              ? '/secure/files'
              : '/secure/teacher/files'
          }
        />
      </li>
      <li className="Sidebar__item">
        {isStudentType(accountType) && (
          <Link text="People" url="/secure/people" />
        )}
      </li>
    </Menu>
  </div>
);

MainPanelLinks.propTypes = {
  accountType: PropTypes.string.isRequired
};

export default MainPanelLinks;
