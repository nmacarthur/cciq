import React, { Component } from 'react';
import Heading from '../../organisms/heading';
import VideoSlider from '../../organisms/videoslider';
import Text1 from '../../organisms/text1';
import Tiles from '../../organisms/tiles';
import Text2 from '../../organisms/text2';
import ImageRoller from '../../organisms/imageroller';
import CTA from '../../organisms/cta';
import Footer from '../../organisms/footer';

import theme from '../../theme';

class DefaultTemplate extends Component {
  constructor({ location, content, queensland }) {
    super();
    this.location = location;
    this.content = content;
    this.queensland = queensland;
  }
  render() {
    if (this.queensland) {
      return (
        <div>
          <Heading backgroundColor={theme.primary} />
          <VideoSlider backgroundColor={theme.primary} />
          <Text1 backgroundColor={theme.primary} location={this.location} />
          <Tiles
            backgroundColor={theme.primary}
            location={this.location}
            queensland={true}
            content={this.content}
          />
          <Text2 backgroundColor={theme.primary} location={this.location} />
          <ImageRoller backgroundColor={theme.primary} location={this.location} />
          <CTA backgroundColor={theme.primary} location={this.location} content={this.content} />
          <Footer backgroundColor={theme.dark} location={this.location} content={this.content} />
        </div>
      );
    } else {
      return (
        <div>
          <Heading backgroundColor={theme.primary} />
          <VideoSlider backgroundColor={theme.primary} />
          <Text1 backgroundColor={theme.primary} location={this.location} />
          <Tiles backgroundColor={theme.primary} location={this.location} content={this.content} />
          <Text2 backgroundColor={theme.primary} location={this.location} />
          <ImageRoller backgroundColor={theme.primary} location={this.location} />
          <CTA backgroundColor={theme.primary} location={this.location} content={this.content} />
          <Footer backgroundColor={theme.dark} location={this.location} content={this.content} />
        </div>
      );
    }
  }
}

export default DefaultTemplate;
