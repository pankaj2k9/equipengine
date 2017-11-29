import React from 'react';
import styled from 'styled-components';

import Container from 'base_components/Container';
// NoticeboardDashboard
import UserAvatar from 'base_components/UserAvatar';
import iconUser from 'resources/images/user.png';
import Form, { TextArea, Text } from 'base_components/RootForm';
import DateTime from 'base_components/DateTime';
// NoticeboardDashboard Header
import { MainHeaderTitle } from 'base_components/Main';
import Caret from 'react-icons/lib/fa/caret-down';

const HeaderDashboard = MainHeaderTitle.extend`
  display: flex;
  justify-content: space-between;

  p {
    margin-bottom: 0;
    color: #111111;
    font-size: 16px;
  }

  span {
    text-transform: uppercase;
    margin-right: 0.5em;
  }

  @media screen and (min-with: 768px) {
    border-right: 0px;
  }
`;

const ItemNotice = styled(({ className }) => (
  <li className={className}>
    <div>
      <UserAvatar image={iconUser} />
      <span>Jon Mccall</span>
      <DateTime date="22 Sep" time="2:00pm" />
    </div>
    <div>
      <p>
        Hi everyone. Dont forget to send in your registration forms for this
        weeks event. Anyone that can make it is welcome.
      </p>
      <Form>
        <Text name="comment" placeholder="Comment..." />
      </Form>
    </div>
  </li>
))`
  display: flex;
  border-bottom: 1px solid #dadada;
  padding: 2em 0 1.5em 0;

  > div:first-child {
    display: flex;
    flex-direction: column;
    margin-right: 0.8em;

    span:first-child {
      font-size: 10px;
      color: #1e1e1e;
    }
  }

  p {
    color: #000000;
  }
`;

const BodyDashboard = Container.extend`
  @media screen and (min-width: 768px) {
    min-height: 80vh;
  }
`;

// noticeboard component.
const NoticeboardDashboard = styled(({ className }) => (
  <div className={className}>
    <HeaderDashboard>
      <p>Noticeboard</p>
      <div>
        <span>Most Recent</span>
        <Caret />
      </div>
    </HeaderDashboard>
    <BodyDashboard>
      <Form>
        <TextArea
          row={3}
          name="noticeboard"
          placeholder="Write on the noticeboard..."
        />
      </Form>
      <ul>
        <ItemNotice />
        <ItemNotice />
      </ul>
    </BodyDashboard>
  </div>
))`
  border-right: 1px solid #dadada;

  @media screen and (min-width: 768px) {
    width: 65%;
  }
`;

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
