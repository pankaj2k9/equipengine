import React, { Fragment } from 'react';
//
import TabsGroup from './components/TabsGroup';

/**
   TODO:
   - Create the layout for our BrowseGroups scene.
   - Create Head and Body siblings component of BrowseGroups.
   - Move the TabsGroup inside the Body component and also the groups array.
   - Add components to Head
   - Add components to Body.
 */
const BrowseGroups = () => {
  // your group items.
  const groups = [
    {
      id: '5fgjsdflsadjflksafmsmf',
      title: 'Connect: Level 2',
      desc:
        'This group is for people who are in level 3 pathway in the Connect Program. ',
      people: 12,
      isSelected: false,
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
    },
    {
      id: '5fgjsdflsadjsajfmsdfnsjdfk',
      title: 'Public Connect: Level 3',
      desc:
        'This group is for people who are in level 3 pathway in the Public Connect Program. ',
      people: 10,
      isJoined: false,
      type: 'public-group'
    },
    {
      id: '5fgjsdflsadjsajfmsdfnsadfjkl',
      title: 'Public Connect: Level 4',
      desc:
        'This group is for people who are in level 3 pathway in the Public Connect Program. ',
      people: 5,
      isJoined: true,
      type: 'public-group'
    }
  ];

  return (
    <Fragment>
      <TabsGroup groups={groups} />
    </Fragment>
  );
};

export default BrowseGroups;
