import React from 'react';

// for the video player
import { Player } from 'video-react';
import moment from 'moment';
import videoSrc from './sample.mp4';
import posterSrc from './poster.png';
import './styles.css';

import VideoMedia from './components/VideoMedia/index.js';
import VideoRunningTime from './components/VideoRunningTime';

class VideoPlayer extends React.Component {
  constructor() {
    super();
    this.state = {
      player: {},
      currentTime: ''
    };
  }
  componentDidMount() {
    // subscribe state change
    this.refs.player.subscribeToStateChange(this.handleStateChange);
  }

  handleStateChange = (state, prevState) => {
    // copy player state to this component's state
    this.setState({
      player: state,
      currentTime: state.currentTime
    });
  };

  render() {
    // transform the current time of the video in hourly format.
    const currentTime = moment()
      .startOf('day')
      .seconds(this.state.currentTime)
      .format('H:mm:ss');

    return (
      <div>
        <div style={videoPlayerStyle.container}>
          <Player ref="player" poster={posterSrc} playsInline>
            <source src={videoSrc} />
          </Player>
          <VideoMedia />
          <VideoRunningTime currentTime={currentTime} />
        </div>
      </div>
    );
  }
}
// styles
const videoPlayerStyle = {
  container: {
    width: '100%'
  }
};

export default VideoPlayer;
