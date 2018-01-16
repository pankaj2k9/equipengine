import React from 'react';
// components
import ContainerFlex from 'base_components/ContainerFlex';
import SidebarAdminCourse from './components/SidebarAdminCourse';

const AdminCourseCreator = () => (
  <ContainerFlex>
    <SidebarAdminCourse />
    <div>content component</div>
  </ContainerFlex>
);

export default AdminCourseCreator;
