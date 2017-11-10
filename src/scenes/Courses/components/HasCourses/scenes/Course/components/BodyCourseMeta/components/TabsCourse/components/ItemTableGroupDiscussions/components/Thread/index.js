import React, { Component } from 'react';
import styled from 'styled-components';
import { Modal } from 'react-bootstrap';
import ModalHeader from 'react-bootstrap/lib/ModalHeader';
import ModalTitle from 'react-bootstrap/lib/ModalTitle';
import ModalBody from 'react-bootstrap/lib/ModalBody';
import ModalFooter from 'react-bootstrap/lib/ModalFooter';
import IconPlus from 'react-icons/lib/fa/plus';

import RootForm, { TextArea } from 'base_components/RootForm';
import Button from 'base_components/RootButton';
import iconDropfile from 'resources/images/dropfile.svg';

const ThreadModal = styled(Modal)`
  .modal-dialog {
    width: 100%;
    height: 100%;
    margin: 0;

    .modal-content {
      border-radius: 0;
      border: 0;
      min-height: 100vh;
      position: relative;
    }
    .modal-footer {
      position: absolute;
      bottom: 0;
      width: 100%;

      > div {
        width: 774px;
        margin: 0 auto;
      }

      form div {
        margin-top: 0.5em;
        img {
          margin-right: 1em;
        }
      }
    }
  }
`;

// button to open the thread modal.
const OpenThread = Button.extend`
  width: 148px;
  i {
    font-size: 1rem;
    margin-left: 0.5em;
  }
`;

// New Thread Component.
class Thread extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    };
  }

  close = () => {
    this.setState({ showModal: false });
  };

  open = () => {
    this.setState({ showModal: true });
  };

  render() {
    return (
      <div>
        <OpenThread secondary onClick={this.open}>
          New Thread
          <i>
            <IconPlus />
          </i>
        </OpenThread>

        <ThreadModal
          className="Modal"
          show={this.state.showModal}
          onHide={this.close}
        >
          <ModalHeader closeButton />
          <ModalBody>
            <p>lorem ipsum</p>
          </ModalBody>
          <ModalFooter>
            <div>
              <RootForm>
                <TextArea name="thread" placeholder="Write Something" />
                <div>
                  <img src={iconDropfile} alt="Drop file" />
                  <Button onClick={this.close}>Close</Button>
                </div>
              </RootForm>
            </div>
          </ModalFooter>
        </ThreadModal>
      </div>
    );
  }
}

export default Thread;
