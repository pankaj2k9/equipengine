import React from 'react';
import PropTypes from 'prop-types';
// for Tab Component
import { Tab } from 'react-bootstrap';
import Tabs from 'base_components/Tabs';

import ItemTabYourGroup from './components/ItemTabYourGroup';
import ItemTabPublicGroup from './components/ItemTabPublicGroup';

const TabsGroup = ({ yourGroups }) => (
  <Tabs>
    <Tab eventKey={1} title="Your Groups">
      <ItemTabYourGroup yourGroups={yourGroups} />
    </Tab>
    <Tab eventKey={2} title="Public Groups">
      <ItemTabPublicGroup />
    </Tab>
  </Tabs>
);

TabsGroup.propTypes = {
  yourGroups: PropTypes.array.isRequired
};

export default TabsGroup;
