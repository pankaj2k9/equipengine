import React from 'react';
import PropTypes from 'prop-types';
import Media from 'react-media';

import ModalBox from './ModalBox';
import ModalButton from './ModalButton';
import closeSrc from '../close-button.svg';

const ModalHeader = ({ handleCloseModal }) => {
  return (
    <ModalBox
      style={{
        flexDirection: 'row-reverse',
        padding: '1% 3% 3% 3%'
      }}
    >
      <ModalButton
        handleClick={handleCloseModal}
        style={{
          padding: 0,
          fontSize: '1.2rem'
        }}
      >
        <Media query="(max-width: 767px)">
          {matches =>
            matches ? (
              <img
                className="ModalButtonClose"
                alt="ButtonClose"
                src={closeSrc}
                style={{ height: 15 }}
              />
            ) : (
              <img
                className="ModalButtonClose"
                alt="ButtonClose"
                src={closeSrc}
              />
            )}
        </Media>
      </ModalButton>
    </ModalBox>
  );
};

ModalHeader.propTypes = {
  handleCloseModal: PropTypes.func.isRequired
};

export default ModalHeader;
