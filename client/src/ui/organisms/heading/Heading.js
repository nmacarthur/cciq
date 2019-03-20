import React, { Component } from 'react';
import styled from 'styled-components';

import Section from '../../atoms/section';
import Container from '../../atoms/container';
import Row from '../../atoms/row';
import Column from '../../atoms/column';

import cciq from '../../../assets/i-logo.svg';
import heading from '../../../assets/heading.svg';

const HeaderImg = styled.img`
  width: 100%;
`;

const Logo = styled.img`
  max-width: 200px;
  margin: auto;
  margin-bottom: 4rem;
`;

class Heading extends Component {
  constructor({ backgroundColor }) {
    super();
    this.backgroundColor = backgroundColor;
  }

  render() {
    return (
      <Section backgroundColor={this.backgroundColor} space={8}>
        <Container>
          <Row alignItems="center" justifyContent="center">
            <Logo src={cciq} alt="cciq logo" />
          </Row>
          <Row alignItems="center" justifyContent="center">
            <Column sm={12} md={6}>
              <HeaderImg src={heading} alt="heading" />
            </Column>
          </Row>
        </Container>
      </Section>
    );
  }
}

export default Heading;
