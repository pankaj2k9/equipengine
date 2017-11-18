import React from 'react';
import styled from 'styled-components';

import MessagesConvoList from './components/MessagesConvoList';

const MessagesConvo = styled(({ className }) => (
  <div className={className}>
    <header>
      <span>Conversation: Steve Long, Jane Doe</span>
    </header>
    <MessagesConvoList />
  </div>
))`
  header {
    border-bottom: 1px solid #dadada;
    padding: 0.8em;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    span {
      font-size: 0.8rem;
      color: #adadad;
      margin-top: 0.3em;
    }
  }

  @media screen and (min-width: 768px) {
    border-left: 1px solid #dadada;
  }
`;

export default MessagesConvo;
