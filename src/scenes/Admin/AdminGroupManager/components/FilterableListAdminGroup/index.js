import React from 'react';
// # Containers
import Container from 'base_components/Container';
import ContainerFilterableList from '../../../components/ContainerAdminPanel/components/ContainerFilterableList';
import SearchbarListAdminGroup from './components/SearchbarListAdminGroup';
import ListAdminGroup from './components/ListAdminGroup';

const FilterableListAdminGroup = () => (
  <ContainerFilterableList>
    <SearchbarListAdminGroup />
    <ListAdminGroup />
  </ContainerFilterableList>
);

export default FilterableListAdminGroup;
