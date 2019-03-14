import React, { Component } from 'react';
import Heading from '../../organisms/heading';
import VideoSlider from '../../organisms/videoslider';
import Text1 from '../../organisms/text1';
import Tiles from '../../organisms/tiles';
import Text2 from '../../organisms/text2';
import CTA from '../../organisms/cta';
import Footer from '../../organisms/footer';

import theme from '../../theme';

class DefaultTemplate extends Component {
  constructor({ location }) {
    super();
    this.location = location;
  }
  render() {
    return (
      <div>
        <Heading backgroundColor={theme.primary} />
        <VideoSlider backgroundColor={theme.primary} />
        <Text1 backgroundColor={theme.primary} location={this.location} />
        <Tiles backgroundColor={theme.primary} location={this.location} />
        <Text2 backgroundColor={theme.primary} location={this.location} />
        <CTA backgroundColor={theme.primary} location={this.location} />
        <Footer backgroundColor={theme.dark} location={this.location} />
      </div>
    );
  }
}

export default DefaultTemplate;
