import React from 'react';
import styled from 'styled-components';

import FilterableListAdminGroup from './components/FilterableListAdminGroup';
import TabsAdminGroup from './components/TabsAdminGroup';

// this the root component for admin group manager.
const ContainerAdminGroupManager = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

const AdminGroupManager = () => (
  <ContainerAdminGroupManager>
    <FilterableListAdminGroup />
    <TabsAdminGroup />
  </ContainerAdminGroupManager>
);

export default AdminGroupManager;
