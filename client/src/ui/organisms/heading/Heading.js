import React, { Component } from 'react';

import Section from '../../atoms/section';
import Container from '../../atoms/container';
import Row from '../../atoms/row';
import Column from '../../atoms/column';

import heading from '../../../assets/heading.svg';

class Heading extends Component {
  constructor({ backgroundColor }) {
    super();
    console.log(backgroundColor);
    console.log(backgroundColor);
    this.backgroundColor = backgroundColor;
  }

  render() {
    return (
      <Section backgroundColor={this.backgroundColor}>
        <Container>
          <Row alignItems="center" justifyContent="center">
            <Column sm={12} md={6}>
              <img src={heading} alt="heading" />
            </Column>
          </Row>
        </Container>
      </Section>
    );
  }
}

export default Heading;
