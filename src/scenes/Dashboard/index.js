import React from 'react';
import styled from 'styled-components';

import NoticeboardDashboard from './components/NoticeboardDashboard';

// for tutorial completed and some reports component
const ReportDashboard = styled(({ className }) => (
  <div>report dashboard</div>
))``;

const Dashboard = styled(({ className }) => (
  <div className={className}>
    <NoticeboardDashboard />
    <ReportDashboard />
  </div>
))`
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

export default Dashboard;
