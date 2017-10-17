import React from 'react';
import PropTypes from 'prop-types';

import TutorialInfo from './components/TutorialInfo';

const modalBodyStyle = {
  display: 'flex',
  flexDirection: 'column-reverse'
};

const ModalBody = () => {
  return (
    <div style={modalBodyStyle} className="ModalBody">
      <TutorialInfo />
      <TutorialTask />
    </div>
  );
};

const TutorialTask = () => {
  return <div>task</div>;
};

ModalBody.propTypes = {};

export default ModalBody;
