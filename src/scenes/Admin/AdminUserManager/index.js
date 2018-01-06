import React from 'react';
// Containers
import ContainerAdminPanel from '../components/ContainerAdminPanel';
import ContainerFilterableList, {
  ContainerSearchbarList
} from '../components/ContainerAdminPanel/components/ContainerFilterableList';
import ContainerTabsAdmin from '../components/ContainerAdminPanel/components/ContainerTabsAdmin';

const AdminUserManager = () => (
  <ContainerAdminPanel>
    <ContainerFilterableList>
      <ContainerSearchbarList>
        Searchbar list user manager
      </ContainerSearchbarList>
    </ContainerFilterableList>
    <ContainerTabsAdmin>Tabs Admin user manager</ContainerTabsAdmin>
  </ContainerAdminPanel>
);

export default AdminUserManager;
