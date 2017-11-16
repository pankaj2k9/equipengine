import React from 'react';

import { MainInnerContainer, MainLeft } from 'base_components/Main';
import SideContainer from './components/SideContainer';
import TabsGroup from './components/TabsGroup';

// your group items.
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

// the Groups scene.
const Groups = () => (
  <MainInnerContainer>
    <MainLeft>
      <TabsGroup yourGroups={yourGroupItems} />
    </MainLeft>
    <SideContainer yourGroups={yourGroupItems} />
  </MainInnerContainer>
);

export default Groups;
