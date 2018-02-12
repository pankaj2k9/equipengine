import React from 'react';
import Menu from '../Menu';
import Link from 'base_components/Link';

// this is for teacher panel links
const TeacherPanelLinks = () => (
  <div className="Sidebar__body__otherPages">
    <Menu>
      <li className="Sidebar__item">
        <Link text="Groups Activiy" url="/teachers/groups-activity" />
      </li>
      <li className="Sidebar__item">
        <Link
          text="Submissions Activity"
          url="/teachers/submissions-activity"
        />
      </li>
      <li className="Sidebar__item">
        <Link text="Files" url="/teachers/files" />
      </li>
      <li className="Sidebar__item">
        <Link text="User Manager" url="/teachers/user-manager" />
      </li>
    </Menu>
  </div>
);

export default TeacherPanelLinks;
