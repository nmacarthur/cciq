import React, { Component } from 'react';
import Section from '../../atoms/section';
import Container from '../../atoms/container';
import Row from '../../atoms/row';
import Column from '../../atoms/column';

import Carousel from 'nuka-carousel';

import eg from '../../../assets/eg.jpg';

class ImageRoller extends Component {
  constructor({ backgroundColor, location }) {
    super();
    this.backgroundColor = backgroundColor;
    this.location = location;
  }
  render() {
    return (
      <Section backgroundColor={this.backgroundColor} space={4}>
        <Container>
          <Row alignItems="center" justifyContent="center">
            <Column sm={12} md={8}>
              <div>
                <img src={eg} />
              </div>
              <div>
                <img src={eg} />
              </div>
              <div>
                <img src={eg} />
              </div>
              <div>
                <img src={eg} />
              </div>
              <div>
                <img src={eg} />
              </div>
            </Column>
          </Row>
        </Container>
      </Section>
    );
  }
}

export default ImageRoller;
