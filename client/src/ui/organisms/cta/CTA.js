import React, { Component } from 'react';
import styled from 'styled-components';

import Section from '../../atoms/section';
import Container from '../../atoms/container';
import Row from '../../atoms/row';
import Column from '../../atoms/column';
import Button from '../../atoms/button';

import { Heading } from 'rebass';

const InlineButton = styled(Button)`
  display: inline;
  font-size: 2rem;
  padding: 0.25rem 1rem;
  transform: translateY(-0.25rem);
  :hover {
    .15625transform: translate(2.5px, -0.40625rem);
  }
`;

class CTA extends Component {
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
                Join us on <InlineButton fontSize="2rem">facebook</InlineButton>
              </Heading>
            </Column>
          </Row>
        </Container>
      </Section>
    );
  }
}

export default CTA;
