import React from 'react';
import styled from 'styled-components';

import ContainerAdminPanel from '../components/ContainerAdminPanel';
import FilterableListAdminGroup from './components/FilterableListAdminGroup';
import TabsAdminGroup from './components/TabsAdminGroup';

const AdminGroupManager = () => (
  <ContainerAdminPanel>
    <FilterableListAdminGroup />
    <TabsAdminGroup />
  </ContainerAdminPanel>
);

export default AdminGroupManager;
