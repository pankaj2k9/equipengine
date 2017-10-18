import React from 'react';
import Media from 'react-media';

import ModalBoxVideoInfo from './ModalBoxVideoInfo';

const VideoRunningTime = ({ currentTime }) => {
  const { span, p, desktopViewport } = videoRunningTimeStyle;

  return (
    <Media query="(max-width: 767px)">
      {matches =>
        matches ? (
          <ModalBoxVideoInfo>
            <div>
              <span style={span}>Running Time</span>
              <p style={p}>{currentTime}</p>
            </div>
          </ModalBoxVideoInfo>
        ) : (
          <ModalBoxVideoInfo style={desktopViewport}>
            <div>
              <span
                style={{
                  ...span,
                  ...span.desktopViewport
                }}
              >
                Running Time
              </span>
              <p
                style={{
                  ...p,
                  ...p.desktopViewport
                }}
              >
                {currentTime}
              </p>
            </div>
          </ModalBoxVideoInfo>
        )}
    </Media>
  );
};

const videoRunningTimeStyle = {
  span: {
    fontSize: 12,
    color: '#4e4e4e',
    desktopViewport: {
      color: '#ffffff'
    }
  },
  p: {
    fontSize: 14,
    marginBottom: 0,
    desktopViewport: {
      color: '#ffffff'
    }
  },
  desktopViewport: {
    order: 3,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    marginBottom: '1.1em'
  }
};

export default VideoRunningTime;
