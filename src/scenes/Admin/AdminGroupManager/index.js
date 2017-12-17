import React from 'react';
import styled from 'styled-components';

// for header of list admin manager group
import Button from 'base_components/RootButton';
import Form, { Text } from 'base_components/RootForm';
import IconUser from 'react-icons/lib/fa/user';

// for settign admin manager
import Container from 'base_components/Container';

// This is searchbar for list group
const SearchbarListAdminGroup = styled(({ className }) => (
  <Container className={className}>
    <Button secondary>Show All</Button>
    <Form>
      <Text name="create-groups" placeholder="Search groups" />
    </Form>
    <Button>Create a group</Button>
  </Container>
))`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-bottom: 1px solid #dadada;
  margin-bottom: 0;

  @media screen and (max-width: 767px) {
    button,
    input {
      width: 100%;
      margin-bottom: 10px;
    }

    button:last-child {
      margin-bottom: 1.5em;
    }
  }

  @media screen and (min-width: 768px) {
    margin: 0;
    flex-direction: row;

    form {
      width: 192px;
    }

    button:last-child {
      width: 126px;
    }
  }
`;

// this is for list group
const ListItem = styled(({ className }) => (
  <li className={className}>
    <span>Connect: Level 3</span>
    <div>
      <span>
        <IconUser />
      </span>
      <span>22/40</span>
    </div>
  </li>
))`
  padding: 20px 17px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => props.active && 'rgba(184, 184, 184, .2)'};
  color: #111111;

  > div span:first-child {
    font-size: 1.1rem;
    color: #9fa6ad;
    margin-right: 0.3em;
  }

  @media screen and (min-width: 768px) {
    padding: 24px 35px;
  }
`;
const ListAdminGroup = () => (
  <ul>
    <ListItem />
    <ListItem active />
  </ul>
);

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
