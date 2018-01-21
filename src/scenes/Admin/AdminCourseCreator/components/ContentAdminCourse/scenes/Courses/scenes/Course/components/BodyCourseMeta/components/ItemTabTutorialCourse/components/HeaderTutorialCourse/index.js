import React from 'react';
import styled from 'styled-components';
//
import ButtonAdd from 'base_components/ButtonAdd';

const ContainerHeader = styled.div`
  padding-bottom: 0.8em;
  border-bottom: 1px solid #d8d8d8;

  @media screen and (min-width: 768px) {
    padding-bottom: 1.5em;
  }
`;

const HeaderTutorialCourse = () => (
  <ContainerHeader>
    <ButtonAdd text="Add new lesson" />
  </ContainerHeader>
);

export default HeaderTutorialCourse;
