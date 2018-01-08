import React from 'react';
import styled from 'styled-components';
// Container
import ContainerBodyAdmin from '../../../components/ContainerAdminPanel/components/ContainerBodyAdmin';
// sub-components
import Form from 'base_components/RootForm';
import FormUserDetails from './components/FormUserDetails';
import FormOtherInfo from './components/FormOtherInfo';
import FormGroups from './components/FormGroups';

// extend-form
const MainForm = styled(Form)`
  width: 100%;
`;

const FormAdminUser = () => (
  <ContainerBodyAdmin>
    <MainForm>
      <FormUserDetails />
      <FormOtherInfo />
      <FormGroups />
    </MainForm>
  </ContainerBodyAdmin>
);

export default FormAdminUser;
