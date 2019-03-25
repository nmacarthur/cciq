import React, { Component } from 'react';
import Section from '../../atoms/section';
import Container from '../../atoms/container';
import Row from '../../atoms/row';
import Column from '../../atoms/column';

import { Heading, Text } from 'rebass';

class Text1 extends Component {
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
                97% of {this.location} business <br />
                is small business
              </Heading>
              <Text textAlign="center" fontSize="1.5rem">
                Show your support for small business
              </Text>
            </Column>
          </Row>
        </Container>
      </Section>
    );
  }
}

export default Text1;
