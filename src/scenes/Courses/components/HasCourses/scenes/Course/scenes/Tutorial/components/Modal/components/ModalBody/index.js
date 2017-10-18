import React from 'react';
import Media from 'react-media';

import TutorialInfo from './components/TutorialInfo';
import TutorialTask from './components/TutorialTask';

const ModalBody = () => {
  return (
    <Media query="(max-width: 767px)">
      {matches =>
        matches ? (
          <div style={modalBodyStyle} className="ModalBody">
            <TutorialInfo />
            <TutorialTask />
          </div>
        ) : (
          <div style={modalBodyStyle.desktopViewport} className="ModalBody">
            <TutorialInfo />
            <TutorialTask />
          </div>
        )}
    </Media>
  );
};

const modalBodyStyle = {
  display: 'flex',
  flexDirection: 'column',
  desktopViewport: {
    display: 'flex'
  }
};

export default ModalBody;