import React, { Component } from 'react';
import styled from 'styled-components';
import videoplaceholder from '../../../assets/video_placeholder.jpg';
import playbutton from '../../../assets/playbutton.svg';

const Img = styled.img`
  width: 100%;
`;

const PlayButton = styled.img`
  width: 6.375rem;
  height: 6.375rem;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const Box = styled.div`
  position: relative;
`;

class Video extends Component {
  render() {
    return (
      <Box>
        <PlayButton src={playbutton} />
        <Img src={videoplaceholder} alt="videoplaceholder" />
      </Box>
    );
  }
}

export default Video;
