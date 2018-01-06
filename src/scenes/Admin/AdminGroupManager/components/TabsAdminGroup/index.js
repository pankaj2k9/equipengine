import React from 'react';
// for Tab Component
import { Tab } from 'react-bootstrap';
import Tabs from 'base_components/Tabs';
// base components.
import Container from 'base_components/Container';
import ContainerTabsAdmin from '../../../components/ContainerAdminPanel/components/ContainerTabsAdmin';
// sub components
import ItemTabAdminGroupSettings from './components/ItemTabAdminGroupSettings';
import ItemTabAdminGroupUsers from './components/ItemTabAdminGroupUsers';
import ItemTabAdminGroupCourses from './components/ItemTabAdminGroupCourses';

// settings admin manager group.
const TabsAdminGroup = () => (
  <ContainerTabsAdmin>
    <Tabs>
      <Tab eventKey={1} title="Courses">
        <ItemTabAdminGroupCourses />
      </Tab>
      <Tab eventKey={2} title="Users">
        <ItemTabAdminGroupUsers />
      </Tab>
      <Tab eventKey={3} title="Settings">
        <ItemTabAdminGroupSettings />
      </Tab>
    </Tabs>
  </ContainerTabsAdmin>
);

export default TabsAdminGroup;
