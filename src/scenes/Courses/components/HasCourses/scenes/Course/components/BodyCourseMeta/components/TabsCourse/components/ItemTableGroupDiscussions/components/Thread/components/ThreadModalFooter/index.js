import React from 'react';
import styled from 'styled-components';
import ModalFooter from 'react-bootstrap/lib/ModalFooter';

import RootForm, { TextArea } from 'base_components/RootForm';
import iconDropfile from 'resources/images/dropfile.svg';
import Button from 'base_components/RootButton';

const ThreadModalFooter = styled(({ className }) => (
  <ModalFooter className={className}>
    <div>
      <RootForm>
        <TextArea name="thread" placeholder="Write Something" />
        <div>
          <img src={iconDropfile} alt="Drop file" />
          <Button>Submit</Button>
        </div>
      </RootForm>
    </div>
  </ModalFooter>
))`
  width: 100%;

  > div {
    max-width: 774px;
    margin: 0 auto;
  }

  form div {
    margin-top: 0.5em;
    img {
      margin-right: 1em;
    }
  }
`;

export default ThreadModalFooter;
