import React from "react"
import Menu from "../Menu"
// import Link from 'base_components/Link'
import Title from "../Title"
import Link from "../Link"

// this is for admin panel links
const AdminPanelLinks = () => (
  <div className="Sidebar__body__mainPages">
    <Menu>
      <Title>Admin Area</Title>
      <Link isStrict text="Group Manager" url="/secure/admin/groups" />
      <Link text="Course Creator" url="/secure/admin/course-creator/courses" />
      <Link isStrict text="User Manager" url="/secure/admin/users" />
      <Link
        text="Organizations Settings"
        url="/secure/admin/organisation-settings"
      />
    </Menu>
  </div>
)

export default AdminPanelLinks
