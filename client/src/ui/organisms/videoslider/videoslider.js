import React, { Component } from 'react';
import ItemsCarousel from 'react-items-carousel';

import Section from '../../atoms/section';
import Container from '../../atoms/container';
import Row from '../../atoms/row';
import Column from '../../atoms/column';
import Video from '../../atoms/video';

import Chevron from '../../atoms/chevron';

class VideoSlider extends Component {
  constructor({ backgroundColor, children }) {
    super();
    this.backgroundColor = backgroundColor;
    this.state = {
      activeItemIndex: 1
    };
  }
  changeActiveItem = activeItemIndex => this.setState({ activeItemIndex });

  render() {
    const { activeItemIndex } = this.state;

    return (
      <Section backgroundColor={this.backgroundColor} space={4}>
        <Container>
          <Row alignItems="center" justifyContent="center">
            <Column sm={12} md={10}>
              <ItemsCarousel
                // Placeholder configurations
                enablePlaceholder
                numberOfPlaceholderItems={1}
                minimumPlaceholderTime={1000}
                placeholderItem={<div style={{ height: 200, background: '#900' }}>Placeholder</div>}
                // Carousel configurations
                numberOfCards={1}
                gutter={12}
                showSlither={true}
                firstAndLastGutter={true}
                freeScrolling={false}
                // Active item configurations
                requestToChangeActive={this.changeActiveItem}
                activeItemIndex={activeItemIndex}
                activePosition={'center'}
                chevronWidth={24}
                rightChevron={<Chevron />}
                leftChevron={<Chevron direction="left" />}
                outsideChevron={false}
              >
                <Video />
                <Video />
                <Video />
                <Video />
              </ItemsCarousel>
            </Column>
          </Row>
        </Container>
      </Section>
    );
  }
}

export default VideoSlider;
