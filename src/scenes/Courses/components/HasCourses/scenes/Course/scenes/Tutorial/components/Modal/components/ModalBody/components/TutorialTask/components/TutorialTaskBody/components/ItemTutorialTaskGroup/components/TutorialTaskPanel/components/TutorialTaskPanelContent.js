import React from 'react';
import { Panel } from 'react-bootstrap';

const TutorialTaskPanelContent = ({ children, isPanelOpen }) => (
  <Panel collapsible expanded={isPanelOpen}>
    {children}
  </Panel>
);

export default TutorialTaskPanelContent;
