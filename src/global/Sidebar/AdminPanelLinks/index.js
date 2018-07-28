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
      <Link isStrict text="Groups" url="/secure/admin/groups" />
      <Link isStrict text="Users" url="/secure/admin/users" />
      <Link text="Courses" url="/secure/admin/courses" />
      <Link text="Add-ons" url="/secure/admin/add-ons" />
      <Link text="Videos" url="/secure/admin/videos" />
      <Link text="Organisations" url="/secure/admin/organisations" />
    </Menu>
  </div>
)

export default AdminPanelLinks
