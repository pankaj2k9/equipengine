import React from 'react';
import { Panel } from 'react-bootstrap';

const TutorialCategoryPanelContent = ({ children, isPanelOpen }) => (
  <Panel collapsible expanded={isPanelOpen}>
    {children}
  </Panel>
);

export default TutorialCategoryPanelContent;
