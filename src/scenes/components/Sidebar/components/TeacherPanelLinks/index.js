import React from 'react';
import Menu from '../Menu';
import Link from 'base_components/Link';

// this is for teacher panel links
const TeacherPanelLinks = () => (
  <div className="Sidebar__body__otherPages">
    <Menu>
      <li className="Sidebar__item">
        <Link text="Groups Activiy" url="/secure/teacher/groups-activity" />
      </li>
      <li className="Sidebar__item">
        <Link
          text="Submissions Activity"
          url="/secure/teacher/submissions-activity"
        />
      </li>
      <li className="Sidebar__item">
        <Link text="User Manager" url="/secure/teacher/user-manager" />
      </li>
    </Menu>
  </div>
);

export default TeacherPanelLinks;
