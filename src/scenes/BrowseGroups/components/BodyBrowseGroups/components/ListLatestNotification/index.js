import React from 'react'
import styled from 'styled-components'
//
import DateTime from 'base_components/DateTime'
import ContainerFlex from 'base_components/ContainerFlex'

const ListItem = styled(({ className }) => (
  <li className={className}>
    <ContainerFlex isSpaceBetween isAlignCenter>
      <DateTime date='22 Sep' time='2:22am' />
      <p>
        <b>John Mcall</b> commented on{' '}
        <strong>Tutorial 1.1: Communication and Culture</strong>
      </p>
    </ContainerFlex>
  </li>
))`
  margin-bottom: 1em;

  > div > div {
    margin-right: 1.8em;
  }

  p {
    margin-bottom: 0;
  }
`

const HeaderListLatest = styled.header`
  border-bottom: 1px solid #dadada;
  padding: 10px 15px 11px 15px;
  margin-top: 1em;
  color: #000;
`

const ListContainer = styled.ul`
  padding: 1em 0;
`

const ListLatestNotification = () => (
  <div>
    <HeaderListLatest>Latest Notification</HeaderListLatest>
    <ListContainer>
      <ListItem />
      <ListItem />
    </ListContainer>
  </div>
)

export default ListLatestNotification
