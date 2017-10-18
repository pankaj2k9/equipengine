import React from 'react';
import PropTypes from 'prop-types';
import { Tab } from 'react-bootstrap';

// base components
import Tabs from 'base_components/Tabs';
import Box from 'base_components/Box';

// sub-components
import ItemTableTutorialFiles from './components/ItemTableFilesTutorial';

const TutorialTaskBody = () => {
  return (
    <Box>
      <Tabs>
        <Tab eventKey={1} title="Questions & Activities">
          <ItemListTutorialQuestions />
        </Tab>
        <Tab eventKey={2} title="Files">
          <ItemTableTutorialFiles />
        </Tab>
      </Tabs>
    </Box>
  );
};

const ItemListTutorialQuestions = () => <div>list tutorial questions</div>;

TutorialTaskBody.propTypes = {};

export default TutorialTaskBody;
