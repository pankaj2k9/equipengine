import React from 'react';
// for Tab Component
import { Tab } from 'react-bootstrap';
import Tabs from 'base_components/Tabs';

import ItemTabYourGroup from './components/ItemTabYourGroup';
import ItemTabPublicGroup from './components/ItemTabPublicGroup';

const yourGroupItems = [
  {
    id: '5fgjsdflsadjflksafmsmf',
    title: 'Connect: Level 2',
    desc:
      'This group is for people who are in level 3 pathway in the Connect Program. ',
    people: 12,
    isSelected: true,
    type: 'your-group'
  },
  {
    id: '5fgjsdflsadjsajfmsdfn',
    title: 'Connect: Level 3',
    desc:
      'This group is for people who are in level 3 pathway in the Connect Program. ',
    people: 5,
    isSelected: false,
    type: 'your-group'
  }
];

const TabsGroup = () => (
  <Tabs>
    <Tab eventKey={1} title="Your Groups">
      <ItemTabYourGroup yourGroups={yourGroupItems} />
    </Tab>
    <Tab eventKey={2} title="Public Groups">
      <ItemTabPublicGroup />
    </Tab>
  </Tabs>
);

export default TabsGroup;
