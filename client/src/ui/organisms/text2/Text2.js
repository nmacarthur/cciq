import React, { Component } from 'react';
import Section from '../../atoms/section';
import Container from '../../atoms/container';
import Row from '../../atoms/row';
import Column from '../../atoms/column';

import { Heading } from 'rebass';

class Text2 extends Component {
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
              <Heading textAlign="center" fontSize="3rem" lineHeight="3.875rem" mb={2}>
                Local heroes supporting small business
              </Heading>
            </Column>
          </Row>
        </Container>
      </Section>
    );
  }
}

export default Text2;
