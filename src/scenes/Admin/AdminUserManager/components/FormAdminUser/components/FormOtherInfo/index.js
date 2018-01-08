import React from 'react';
import styled from 'styled-components';
// components
import Form, {
  FormGroup,
  Label,
  Text,
  TextArea
} from 'base_components/RootForm';
import FormGroupLeft from '../FormGroupLeft';
import ButtonAdd from 'base_components/ButtonAdd';
import PanelAdminUser from '../PanelAdminUser';
import ContainerFlex from 'base_components/ContainerFlex';

// overriding styles for the button add
const ButtonAddGroup = styled(ButtonAdd)`
  border: 1px solid #979797;
  background: transparent;
  color: #000000;
  margin-right: 0;

  &:hover {
    background-color: #e2e2e2;
    color: #000000;
  }
`;

// const overriding the Form
const FormAddGroup = styled(Form)`
  display: flex;
  justify-content: flex-end;
`;

const FormOtherInfo = () => (
  <PanelAdminUser>
    <ContainerFlex>
      <FormGroupLeft>
        <Label>Phone Number</Label>
        <Text name="phoneNumber" placeholder="+61908434" />
      </FormGroupLeft>
      <FormGroup>
        <Label>Date of Birth</Label>
        <Text name="dateOfBirth" placeholder="December 05, 1995" />
      </FormGroup>
    </ContainerFlex>
    <FormGroup>
      <Label>Address</Label>
      <TextArea name="address" row={4} placeholder="Address" />
    </FormGroup>
    <FormAddGroup>
      <ButtonAddGroup text="Add Group" />
    </FormAddGroup>
  </PanelAdminUser>
);

export default FormOtherInfo;
