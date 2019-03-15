import React, { Component } from 'react';

import Section from '../../atoms/section';
import Container from '../../atoms/container';
import Row from '../../atoms/row';
import Column from '../../atoms/column';
import Video from '../../atoms/video';
import Chevron from '../../atoms/chevron';

import Carousel from 'nuka-carousel';
import './style.css';
class VideoSlider extends Component {
  constructor({ backgroundColor, children }) {
    super();
    this.backgroundColor = backgroundColor;
  }

  render() {
    return (
      <Section backgroundColor={this.backgroundColor} space={4} className="carousel-section">
        <Container>
          <Row alignItems="center" justifyContent="center">
            <Column sm={12} md={10}>
              <Carousel
                dragging={false}
                wrapAround={true}
                cellSpacing={32}
                renderCenterLeftControls={({ previousSlide }) => (
                  <Chevron onClick={previousSlide} direction="left" />
                )}
                renderCenterRightControls={({ nextSlide }) => <Chevron onClick={nextSlide} />}
                renderBottomCenterControls={null}
              >
                <div>
                  <Video />
                </div>
                <div>
                  <Video />
                </div>
                <div>
                  <Video />
                </div>
                <div>
                  <Video />
                </div>
                <div>
                  <Video />
                </div>
              </Carousel>
            </Column>
          </Row>
        </Container>
      </Section>
    );
  }
}

export default VideoSlider;
