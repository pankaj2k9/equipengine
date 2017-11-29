import React from 'react';
import styled from 'styled-components';

// NoticeboardDashboard

import HeaderDashboard from './components/HeaderDashboard';
import BodyDashboard from './components/BodyDashboard';

// noticeboard component.
const NoticeboardDashboard = styled(({ className }) => (
  <div className={className}>
    <HeaderDashboard />
    <BodyDashboard />
  </div>
))`
  border-right: 1px solid #dadada;

  @media screen and (min-width: 768px) {
    width: 65%;
  }
`;

export default NoticeboardDashboard;
