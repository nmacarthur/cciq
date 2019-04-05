import React from 'react';
import Swiper from 'swiper';
import nanoid from 'nanoid';
import styled from 'styled-components';

import Chevron from '../../atoms/chevron';
import Video from '../../atoms/video';

const Controls = styled.div`
  position: absolute;
  width: 120%;
  top: 50%;
  left: -10%;
  transform: translateY(-50%);
  z-index: 2;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  pointer-events: none;
`;

const StyledText = styled.h3`
  text-align: center;
`;

export class SwiperSlider extends React.Component {
  constructor(props) {
    super(props);
    this.videos = props.videos;
    this.mySwiper = null;

    this.nextSlide = this.nextSlide.bind(this);
    this.prevSlide = this.prevSlide.bind(this);
  }

  componentDidMount() {
    this.mySwiper = new Swiper('.swiper-container', {
      direction: 'horizontal',
      loop: true,
      navigation: {
        nextEl: '.next-chevron',
        prevEl: '.prev-chevron'
      }
    });
  }

  nextSlide() {
    this.mySwiper.slideNext();
  }

  prevSlide() {
    this.mySwiper.slidePrev();
  }

  render() {
    return (
      <div className="swiper-container">
        <div className="swiper-wrapper">
          {this.props.videos.map(vid => (
            <div key={nanoid()} className="swiper-slide">
              <Video src={vid.src} placeholder={vid.placeholder} />
              <StyledText>{vid.text}</StyledText>
            </div>
          ))}
        </div>
        <Controls>
          <Chevron className="prev-chevron" onClick={this.prevSlide} direction="left" />
          <Chevron className="next-chevron" onClick={this.nextSlide} />
        </Controls>
      </div>
    );
  }
}
