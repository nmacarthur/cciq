import React, { Component } from 'react';

import Section from '../../atoms/section';
import Container from '../../atoms/container';
import Row from '../../atoms/row';
import Column from '../../atoms/column';

import './style.css';
import { SavedCarousel } from './SavedCarousel';
import { SwiperSlider } from './Swiper';

class VideoSlider extends Component {
  constructor({ backgroundColor, children, content }) {
    super();
    this.content = content;
    this.videos = this.content.videos;
    this.backgroundColor = backgroundColor;
  }
  /*              <SavedCarousel videos={this.videos} />
   */
  render() {
    this.videos = this.videos ? this.videos : [];
    return (
      <Section backgroundColor={this.backgroundColor} space={4} className="carousel-section">
        <Container>
          <Row alignItems="center" justifyContent="center">
            <Column sm={12} md={10}>
              <SwiperSlider videos={this.videos} />
            </Column>
          </Row>
        </Container>
      </Section>
    );
  }
}

export default VideoSlider;
