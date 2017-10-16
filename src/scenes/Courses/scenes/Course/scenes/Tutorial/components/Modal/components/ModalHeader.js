import React from 'react';
import IconClose from 'react-icons/lib/fa/close';

import ModalBox from './ModalBox';
import ModalButton from './ModalButton';

const ModalHeader = () => {
  return (
    <ModalBox
      style={{
        flexDirection: 'row-reverse',
        padding: '1% 3% 3% 3%'
      }}
    >
      <ModalButton
        handleClick={_ => console.log('close')}
        style={{
          padding: 0,
          fontSize: '1.2rem'
        }}
      >
        <IconClose />
      </ModalButton>
    </ModalBox>
  );
};

export default ModalHeader;
