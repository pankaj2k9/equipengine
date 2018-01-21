import React from 'react';
// for Tab Component
import { Tab } from 'react-bootstrap';
import Tabs from 'base_components/Tabs';
//
import Box from 'base_components/Box';
import ItemTutorialCourse from './components/ItemTutorialCourse';
import ItemReportingCourse from './components/ItemReportingCourse';

const BodyCourseMeta = () => (
  <Box>
    <Tabs>
      <Tab eventKey={1} title="Tutorials">
        <ItemTutorialCourse />
      </Tab>
      <Tab eventKey={2} title="Reporting/Assesing">
        <ItemReportingCourse />
      </Tab>
    </Tabs>
  </Box>
);

export default BodyCourseMeta;
