import React, { Component } from 'react';

import Section from '../../atoms/section';
import Container from '../../atoms/container';
import Row from '../../atoms/row';
import Column from '../../atoms/column';

class VideoPlayer extends Component {
  constructor({ backgroundColor }) {
    super();
  }

  render() {
    return (
      <Section backgroundColor={this.backgroundColor}>
        <Container>
          <Row alignItems="center" justifyContent="center">
            <Column sm={12} md={6} />
          </Row>
        </Container>
      </Section>
    );
  }
}

export default VideoPlayer;
