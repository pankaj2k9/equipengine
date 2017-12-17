import React from 'react';
import styled from 'styled-components';

import FilterableListAdminGroup from './components/FilterableListAdminGroup';

// for settign admin manager
import Container from 'base_components/Container';

// settings admin manager group.
const TabAdminGroup = () => <Container>group settings</Container>;

// this the root component for admin group manager.
const ContainerAdminGroupManager = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

const AdminGroupManager = () => (
  <ContainerAdminGroupManager>
    <FilterableListAdminGroup />
    <TabAdminGroup />
  </ContainerAdminGroupManager>
);

export default AdminGroupManager;
