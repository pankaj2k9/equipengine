import React from 'react'
import Menu from '../Menu'
// import Link from 'base_components/Link'
import Title from '../Title'
import Link from '../Link'

// this is for admin panel links
const AdminPanelLinks = () => (
  <div className='Sidebar__body__mainPages'>
    <Menu>
      <Title>Admin Area</Title>
      <Link
        text='Group Manager'
        url='/secure/admin/group-manager' />
      <Link
        text='Course Creator'
        url='/secure/admin/course-creator' />
      <Link
        text='User Manager'
        url='/secure/admin/user-manager' />
      <Link
        text='Organizations Settings'
        url='/secure/admin/organisation-settings' />
    </Menu>
  </div>
)

export default AdminPanelLinks
