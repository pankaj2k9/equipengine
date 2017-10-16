import React from 'react';
import PropTypes from 'prop-types';
import Media from 'react-media';

import ModalHeader from './components/ModalHeader';
/* import ModalBody from './components/ModalBody';*/
import ModalFooter from './components/ModalFooter';
import ModalInner from './components/ModalInner';

const Modal = () => {
  const modalStyle = {
    width: '100%',
    height: '100vh',
    backgroundColor: 'rgba(53, 53, 53, 0.53)',
    position: 'fixed',
    zIndex: 5,
    top: 0,
    overflowY: 'auto',
    overflowX: 'hidden'
  };
  return (
    <Media query="(max-width: 767px)">
      {matches =>
        matches ? (
          <div className="Modal" style={modalStyle}>
            <ModalInner>
              <ModalHeader />
              <ModalFooter />
            </ModalInner>
          </div>
        ) : (
          <div
            style={{
              ...modalStyle,
              left: 0
            }}
          >
            <ModalInner>
              <ModalHeader />
              <ModalFooter />
            </ModalInner>
          </div>
        )}
    </Media>
  );
};

Modal.propTypes = {};

export default Modal;
