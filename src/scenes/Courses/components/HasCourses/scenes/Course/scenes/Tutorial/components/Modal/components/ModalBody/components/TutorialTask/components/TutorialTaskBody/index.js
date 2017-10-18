import React from 'react';
import { Tab } from 'react-bootstrap';

// base components
import Tabs from 'base_components/Tabs';
import Box from 'base_components/Box';

// sub-components
import ItemTableTutorialFiles from './components/ItemTableFilesTutorial';
import ItemTutorialTaskGroups from './components/ItemTutorialTaskGroup';

const TutorialTaskBody = () => {
  return (
    <Box>
      <Tabs>
        <Tab eventKey={1} title="Questions & Activities">
          <ItemTutorialTaskGroups />
        </Tab>
        <Tab eventKey={2} title="Files">
          <ItemTableTutorialFiles />
        </Tab>
      </Tabs>
    </Box>
  );
};

TutorialTaskBody.propTypes = {};

export default TutorialTaskBody;
