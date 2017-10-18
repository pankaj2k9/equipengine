import React from 'react';
import Media from 'react-media';

import VideoPlayer from './components/VideoPlayer';

const TutorialTask = () => {
  return (
    <Media query="(max-width: 767px)">
      {matches =>
        matches ? (
          <div className="TutorialTask">
            <VideoPlayer />
          </div>
        ) : (
          <div style={tutorialTaskStyle} className="TutorialTask">
            <VideoPlayer />
          </div>
        )}
    </Media>
  );
};

// component style
const tutorialTaskStyle = {
  width: '70%'
};

TutorialTask.propTypes = {};

export default TutorialTask;
