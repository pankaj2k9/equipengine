import React from 'react';
import styled from 'styled-components';
import IconPlus from 'react-icons/lib/fa/plus';
// sub-components
import ButtonAddGroup from './components/ButtonAddGroup';
import ButtonSecondary from './components/ButtonSecondary';

// for the header container admin users.
const ContainerHeaderAdminUsers = styled.header`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #dadada;
  padding: 6px 0 28px 0;
  margin-bottom: 1.5em;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const HeaderAdminGroupUsers = ({ className }) => (
  <ContainerHeaderAdminUsers>
    <ButtonAddGroup>
      Add User To Group
      <i>
        <IconPlus />
      </i>
    </ButtonAddGroup>
    <ButtonSecondary secondary>Deactivate</ButtonSecondary>
    <ButtonSecondary secondary>Activate</ButtonSecondary>
    <ButtonSecondary secondary>Remove</ButtonSecondary>
  </ContainerHeaderAdminUsers>
);

export default HeaderAdminGroupUsers;
