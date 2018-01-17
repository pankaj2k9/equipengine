import React from 'react';
// component
import Button from 'base_components/RootButton';
import ContainerFlex from 'base_components/ContainerFlex';

const ContainerControlButtons = ContainerFlex.extend`
  flex-direction: column;

  @media screen and (max-width: 767px) {
    button {
      width: 100%;
      margin-bottom: 10px;
    }
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const ControlButtonsGroup = () => (
  <ContainerControlButtons>
    <Button secondary>Show All</Button>
    <Button secondary>Refine</Button>
  </ContainerControlButtons>
);

export default ControlButtonsGroup;
