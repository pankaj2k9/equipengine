import React from 'react';
import styled from 'styled-components';
// for searchbar component list admin manager group
import Container from 'base_components/Container';
import ContainerFilterableList, {
  ContainerSearchbarList
} from '../../../../../components/ContainerAdminPanel/components/ContainerFilterableList';
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
