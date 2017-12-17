import React from 'react';
import styled from 'styled-components';

// for searchbar component list admin manager group
import Container from 'base_components/Container';
import Button from 'base_components/RootButton';
import Form, { Text } from 'base_components/RootForm';

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

export default SearchbarListAdminGroup;
