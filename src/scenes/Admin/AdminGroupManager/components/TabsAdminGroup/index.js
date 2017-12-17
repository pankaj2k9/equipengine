import React from 'react';
// for Tab Component
import { Tab } from 'react-bootstrap';
import Tabs from 'base_components/Tabs';
// base components.
import Container from 'base_components/Container';
// sub components
import ItemTabAdminGroupSettings from './components/ItemTabAdminGroupSettings';

const ContainerTabsAdminGroup = Container.extend`
  .Tabs {
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    margin-top: 5px;
    width: 60%;
  }
`;

// settings admin manager group.
const TabsAdminGroup = () => (
  <ContainerTabsAdminGroup>
    <Tabs>
      <Tab eventKey={1} title="Course">
        Courses
      </Tab>
      <Tab eventKey={2} title="People">
        People
      </Tab>
      <Tab eventKey={3} title="Settings">
        <ItemTabAdminGroupSettings />
      </Tab>
    </Tabs>
  </ContainerTabsAdminGroup>
);

export default TabsAdminGroup;
