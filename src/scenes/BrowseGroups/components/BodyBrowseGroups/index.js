import React from 'react'
import styled from 'styled-components'
//
import TabsGroup from './components/TabsGroup'
import ListLatestNotification from './components/ListLatestNotification'
import ContainerFlex from 'base_components/ContainerFlex'

const BodyBrowseGroups = ({ className }) => {
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
  ]

  return (
    <ContainerFlex className={className}>
      <TabsGroup groups={groups} />
      <ListLatestNotification />
    </ContainerFlex>
  )
}

export default styled(BodyBrowseGroups)`
  flex-direction: column;

  @media screen and (min-width: 768px) {
    justify-content: space-between;
    flex-direction: row;
    margin-top: 1em;

    > div {
      width: 49%;
    }
  }
`
