import React from 'react';
// for Tab Component
import { Tab } from 'react-bootstrap';
import Tabs from 'base_components/Tabs';
//
import Box from 'base_components/Box';
import ItemTabTutorialCourse from './components/ItemTabTutorialCourse';

const BodyCourseMeta = () => (
  <Box>
    <Tabs>
      <Tab eventKey={1} title="Tutorials">
        <ItemTabTutorialCourse />
      </Tab>
      <Tab eventKey={2} title="Reporting/Assesing" />
    </Tabs>
  </Box>
);

export default BodyCourseMeta;
