import React from 'react';
// for searchbar component list admin manager group
import { ContainerSearchbarList } from '../../../../../components/ContainerAdminPanel/components/ContainerFilterableList';
// Containers
// sum forms
import Button from 'base_components/RootButton';
import Form, { Text } from 'base_components/RootForm';

// This is searchbar for list group
const SearchbarListAdminGroup = ({ className }) => (
  <ContainerSearchbarList className={className}>
    <Button secondary>Show All</Button>
    <Form>
      <Text name="create-groups" placeholder="Search groups" />
    </Form>
    <Button>Create a group</Button>
  </ContainerSearchbarList>
);

export default SearchbarListAdminGroup;
