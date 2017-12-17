import React from 'react';

import Container from 'base_components/Container';

import SearchbarListAdminGroup from './components/SearchbarListAdminGroup';
import ListAdminGroup from './components/ListAdminGroup';

// list admin manager group.
const ContainerFilterableList = Container.extend`
  @media screen and (min-width: 768px) {
    flex-direction: column;
    margin: 0;
    padding: 0;
    width: 40%;
    min-height: 90vh;
    border-right: 1px solid #dadada;
  }
`;
const FilterableListAdminGroup = () => (
  <ContainerFilterableList>
    <SearchbarListAdminGroup />
    <ListAdminGroup />
  </ContainerFilterableList>
);

export default FilterableListAdminGroup;
