import React from 'react'
import Menu from '../Menu'
import Link from '../Link'

// this is for teacher panel links
const TeacherPanelLinks = () => (
  <div className='Sidebar__body__otherPages'>
    <Menu>
      <Link
        text='Groups Activiy'
        url='/secure/teacher/groups-activity' />
      <Link
        text='Submissions Activity'
        url='/secure/teacher/submissions-activity'
      />
      <Link
        text='User Manager'
        url='/secure/teacher/user-manager' />
    </Menu>
  </div>
)

export default TeacherPanelLinks
