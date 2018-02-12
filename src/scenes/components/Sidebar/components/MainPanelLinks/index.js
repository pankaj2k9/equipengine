import React from 'react';
import PropTypes from 'prop-types';
import { identical } from 'ramda';
//
import DropdownGroups from '../DropdownGroups';
import Menu from '../Menu';
import Link from 'base_components/Link';

const isStudentType = type => identical(type, 'Student');

const MainPagesLink = ({ accountType }) => (
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
        <Link
          text="Files"
          url={isStudentType(accountType) ? '/files' : '/teachers/files'}
        />
      </li>
      {isStudentType(accountType) && (
        <li className="Sidebar__item">
          <Link text="People" url="/people" />
        </li>
      )}
    </Menu>
  </div>
);

MainPagesLink.propTypes = {
  accountType: PropTypes.string.isRequired
};

export default MainPagesLink;
