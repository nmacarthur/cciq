import React, { Component } from 'react';
import styled from 'styled-components';
import { VimeoPlayer } from 'react-video-players';

import nanoid from 'nanoid';

import videoplaceholder from '../../../assets/video_placeholder.jpg';
import play from '../../../assets/play.svg';
import Button from '../button';

import './videostyles.css';

const Img = styled.img`
  width: 100%;
  opacity: 1;
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
`;

const StyledImg = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const Box = styled.div`
  position: relative;
`;

class Video extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videoPlaying: false
    };
  }

  render() {
    return (
      <Box>
        <PlayButton>
          <StyledImg src={play} />
        </PlayButton>
        <Img src={videoplaceholder} alt="videoplaceholder" />
      </Box>
    );
  }
}

export default Video;
