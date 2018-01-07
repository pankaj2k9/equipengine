import React from 'react';
// Container
import ContainerFilterableList from '../../../components/ContainerAdminPanel/components/ContainerFilterableList';
// sub components
import SearchbarListAdminUser from './components/SearchbarListAdminUser';

const FilterableListAdminUser = () => (
  <ContainerFilterableList>
    <SearchbarListAdminUser />
  </ContainerFilterableList>
);

export default FilterableListAdminUser;
