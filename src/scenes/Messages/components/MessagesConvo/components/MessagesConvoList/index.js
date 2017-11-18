import React from 'react';
import styled from 'styled-components';

import UserAvatar from 'base_components/UserAvatar';
import avatar from 'resources/images/user.png';

const ListMessagesItem = styled(({ className }) => (
  <li className={className}>
    <div>
      <UserAvatar image={avatar} />
      <span>21 Sep</span>
      <span>1:00pm</span>
    </div>
    <p>
      Hi, Loreum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
      risus felis, tincidunt quis eleifend id, interdum vel risus. Mauris
      iaculis sem nisl, vel euismod tellus sagittis ac. Vivamus vitae erat quis
      lorem tempus mollis.
    </p>
  </li>
))`
  display: flex;
  padding: 1.6em 1.3em;
  border-bottom: 1px solid #dadada;

  > div {
    margin-right: 1em;

    img {
      margin-bottom: 0.8em;
    }

    span {
      color: #7e7e7e;
      font-size: 10px;
      display: block;
      margin-top: 0.3em;
    }
  }

  p {
    font-size: 1rem;
    color: #2d2d2d;
    margin-bottom: 0px;
  }
`;

const MessagesConvoList = () => (
  <ul>
    <ListMessagesItem />
    <ListMessagesItem />
  </ul>
);

export default MessagesConvoList;
