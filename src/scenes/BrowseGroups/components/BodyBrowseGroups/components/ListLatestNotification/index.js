import React from 'react';
import styled from 'styled-components';
//
import DateTime from 'base_components/DateTime';

const ListItem = styled(({ className }) => (
  <li className={className}>
    <DateTime date="22 Sep" time="2:22am" />
    <p>
      <b>John Mcall</b> commented on{' '}
      <em>Tutorial 1.1: Communication and Culture</em>
    </p>
  </li>
))``;

const HeaderListLatest = styled.header`
  border-bottom: 1px solid #dadada;
  padding: 10px 15px 11px 15px;
  margin-top: 1em;
  color: #000;
`;

const ListLatestNotification = () => (
  <div>
    <HeaderListLatest>Latest Notification</HeaderListLatest>
    <ul>
      <ListItem />
      <ListItem />
    </ul>
  </div>
);

export default ListLatestNotification;
