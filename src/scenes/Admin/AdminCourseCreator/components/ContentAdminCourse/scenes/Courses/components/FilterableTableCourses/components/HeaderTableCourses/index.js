import React from 'react';
import styled from 'styled-components';
// components
import ControlButtonsGroup from './components/ControlButtonsGroup';
import Container from 'base_components/Container';

const ContainerHeaderTable = styled(Container)`
  padding: 1.5em 2%;
  margin: 0;
  border-bottom: 1px solid #D8D8D8;
  display: flex
  flex-direction: column;
`;

const HeaderTableCourses = () => (
  <ContainerHeaderTable>
    <ControlButtonsGroup />
  </ContainerHeaderTable>
);

export default HeaderTableCourses;
