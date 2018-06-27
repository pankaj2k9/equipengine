import React from 'react'
import Menu from '../Menu'
import Link from 'base_components/Link'
import Title from '../Title'

// this is for admin panel links
const AdminPanelLinks = () => (
  <div className='Sidebar__body__mainPages'>
    <Menu>
      <Title>Admin Area</Title>
      <li className='Sidebar__item'>
        <Link
          text='Group Manager'
          url='/secure/admin/group-manager' />
      </li>
      <li className='Sidebar__item'>
        <Link
          text='Course Creator'
          url='/secure/admin/course-creator' />
      </li>
      <li className='Sidebar__item'>
        <Link
          text='User Manager'
          url='/secure/admin/user-manager' />
      </li>
      <li className='Sidebar__item'>
        <Link
          text='Organizations Settings'
          url='/secure/admin/organisation-settings' />
      </li>
    </Menu>
  </div>
)

export default AdminPanelLinks
