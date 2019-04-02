import React, { Component } from 'react';
import styled from 'styled-components';
import nanoid from 'nanoid';

import play from '../../../assets/play.svg';
import Button from '../button';

import './videostyles.css';

const Img = styled.img`
  width: 100%;
  height: 100%;
  opacity: 1;
  position: absolute;
  display: ${props => (props.videoPlaying ? 'none' : 'block')};
  pointer-events: none;
`;

const PlayButton = styled(Button)`
  width: 6.375rem;
  height: 6.375rem;
  background-color: #f0dd00;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  :hover {
    transform: translate(calc(-50% + 2.5px), calc(-50% + 2.5px));
  }

  display: ${props => (props.videoPlaying ? 'none' : 'block')};
`;

const StyledImg = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const Box = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  max-width: 100%;
`;

const Vid = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
  opacity: ${props => (props.videoPlaying ? '1' : '0')};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

class Video extends Component {
  constructor({ src, placeholder }) {
    super();
    this.src = src;
    this.state = {
      videoPlaying: false
    };
    this.videoplaceholder = placeholder;
    this.id = nanoid();

    this.playVideo = this.playVideo.bind(this);
  }

  componentDidMount() {
    this.vid = document.getElementById(this.id);
  }

  playVideo() {
    this.vid.src += '?autoplay=1&rel=0&vq=hd720';
    setTimeout(
      function() {
        this.setState({ videoPlaying: !this.state.videoPlaying });
      }.bind(this),
      600
    );
  }

  render() {
    return (
      <Box>
        <PlayButton onClick={this.playVideo} videoPlaying={this.state.videoPlaying}>
          <StyledImg src={play} />
        </PlayButton>
        <Img src={this.videoplaceholder} videoPlaying={this.state.videoPlaying} />
        <Vid
          src={this.src}
          id={this.id}
          frameborder="0"
          allowfullscreen="true"
          videoPlaying={this.state.videoPlaying}
        />
      </Box>
    );
  }
}

export default Video;
