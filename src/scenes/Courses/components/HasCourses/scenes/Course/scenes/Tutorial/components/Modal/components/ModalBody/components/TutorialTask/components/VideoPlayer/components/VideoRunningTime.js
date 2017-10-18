import React from 'react';

import ModalBoxVideoInfo from './ModalBoxVideoInfo';

const VideoRunningTime = ({ currentTime }) => (
  <ModalBoxVideoInfo>
    <div>
      <span style={videoRunningTimeStyle.span}>Running Time</span>
      <p style={videoRunningTimeStyle.p}>{currentTime}</p>
    </div>
  </ModalBoxVideoInfo>
);

const videoRunningTimeStyle = {
  span: {
    fontSize: 12,
    color: '#4e4e4e'
  },
  p: {
    fontSize: 14,
    marginBottom: 0
  }
};

export default VideoRunningTime;
