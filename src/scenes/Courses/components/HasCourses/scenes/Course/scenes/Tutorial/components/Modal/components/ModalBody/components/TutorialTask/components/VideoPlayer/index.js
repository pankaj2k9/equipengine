import React from 'react';
import Media from 'react-media';

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
      <Media query="(max-width: 767px)">
        {matches =>
          matches ? (
            <div className="VideoPlayer" style={videoPlayerStyle.container}>
              <VideoForMobile handleStateChange={this.handleStateChange} />
              <VideoMedia />
              <VideoRunningTime currentTime={currentTime} />
            </div>
          ) : (
            <div
              className="VideoPlayer"
              style={videoPlayerStyle.desktopViewport}
            >
              <VideoForDesktop handleStateChange={this.handleStateChange} />
              <VideoMedia />
              <VideoRunningTime currentTime={currentTime} />
            </div>
          )}
      </Media>
    );
  }
}

// styles
const videoPlayerStyle = {
  container: {
    width: '100%',
    innerContainerVideo: {
      order: 2
    }
  },
  desktopViewport: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    background: '#000000'
  }
};

class VideoForDesktop extends React.Component {
  componentDidMount() {
    // subscribe state change
    this.refs.player.subscribeToStateChange(this.props.handleStateChange);
  }

  render() {
    return (
      <div style={videoPlayerStyle.container.innerContainerVideo}>
        <Player
          ref="player"
          poster={posterSrc}
          playsInline
          fluid={false}
          width={410}
          height={292}
        >
          <source src={videoSrc} />
        </Player>
      </div>
    );
  }
}

class VideoForMobile extends React.Component {
  componentDidMount() {
    // subscribe state change
    this.refs.player.subscribeToStateChange(this.props.handleStateChange);
  }

  render() {
    return (
      <div>
        <Player ref="player" poster={posterSrc} playsInline>
          <source src={videoSrc} />
        </Player>
      </div>
    );
  }
}

export default VideoPlayer;
