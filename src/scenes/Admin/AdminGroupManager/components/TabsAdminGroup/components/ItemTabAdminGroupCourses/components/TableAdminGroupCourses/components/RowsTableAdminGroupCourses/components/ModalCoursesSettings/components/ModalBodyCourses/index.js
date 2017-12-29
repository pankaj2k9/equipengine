import React from 'react';
import styled from 'styled-components';
// base
import Panel from 'base_components/Panel';
// sub components
import PanelCourseRules from './components/PanelCourseRules';

// container of modal body.
const ContainerModalBody = styled.div`
  padding: 25px 35px;
`;

const ModalBodyCourses = () => (
  <ContainerModalBody>
    <div>
      <PanelCourseRules />
      <Panel isFullWidth>who is able</Panel>
      <Panel title="Features" isFullWidth />
      <Panel isFullWidth>pause course</Panel>
    </div>
  </ContainerModalBody>
);

export default ModalBodyCourses;
