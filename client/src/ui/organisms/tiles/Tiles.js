import React, { Component } from 'react';
import styled from 'styled-components';

import { Heading, Text } from 'rebass';

import Section from '../../atoms/section';
import Container from '../../atoms/container';
import Row from '../../atoms/row';
import Column from '../../atoms/column';
import Card from '../../atoms/card';

import icon1 from '../../../assets/icon1.svg';
import icon2 from '../../../assets/icon2.svg';
import icon3 from '../../../assets/icon3.svg';

const Icon = styled.img`
  max-width: 100%;
  max-height: 100%;
  margin: auto;
`;

class Tiles extends Component {
  constructor({ backgroundColor, location }) {
    super();
    this.backgroundColor = backgroundColor;
    this.location = location;
  }
  render() {
    return (
      <Section backgroundColor={this.backgroundColor} space={4}>
        <Container>
          <Row alignItems="stretch" justifyContent="center">
            <Column sm={12} md={4} my={1}>
              <Card>
                <Icon src={icon1} />
                <Heading textAlign="center" width="80%" mb={1}>
                  Request a free supporter pack
                </Heading>
                <Text textAlign="center">Stickers, posters, flyers, oh my!</Text>
              </Card>
            </Column>
            <Column sm={12} md={4} my={1}>
              <Card>
                <Icon src={icon2} />
                <Heading textAlign="center" width="80%" mb={1}>
                  Get social with our photo filter
                </Heading>
                <Text textAlign="center">Stickers, posters, flyers, oh my!</Text>
              </Card>
            </Column>
            <Column sm={12} md={4} my={1}>
              <Card>
                <Icon src={icon3} />
                <Heading textAlign="center" width="80%" mb={1}>
                  Lobby your MP
                </Heading>
                <Text textAlign="center">
                  We’ve made it easy and drafted the email for you already!
                </Text>
              </Card>
            </Column>
          </Row>
        </Container>
      </Section>
    );
  }
}

export default Tiles;
