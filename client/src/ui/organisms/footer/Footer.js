import React, { Component } from 'react';
import styled from 'styled-components';

import Section from '../../atoms/section';
import Container from '../../atoms/container';
import Row from '../../atoms/row';
import Column from '../../atoms/column';

import { Text } from 'rebass';

import footersvg from '../../../assets/footer.svg';
import logo1 from '../../../assets/logo1.svg';
import logo2 from '../../../assets/logo2.svg';
import logo3 from '../../../assets/logo3.png';

const FooterImg = styled.img`
  width: 100%;
`;

const FooterText = styled(Text)`
  text-align: center;
  color: #f0dd00;
  text-transform: uppercase;
`;

const Icon = styled.img`
  max-width: 100%;
  max-height: 100%;
  margin: auto;
`;

const FooterColumn = styled(Column)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FooterRow = styled(Row)`
  margin-bottom: 2rem;
`;

class Footer extends Component {
  constructor({ backgroundColor, location }) {
    super();
    this.backgroundColor = backgroundColor;
    this.location = location;
  }
  render() {
    return (
      <Section backgroundColor={this.backgroundColor} space={8}>
        <Container>
          <FooterRow alignItems="center" justifyContent="center">
            <Column sm={12} md={10} justifyContent="center" alignItems="center">
              <FooterImg src={footersvg} />
            </Column>
          </FooterRow>
          <Row alignItems="center" justifyContent="center">
            <Column sm={12} md={10} justifyContent="center" alignItems="center">
              <FooterText>Brought to you by</FooterText>
            </Column>
          </Row>
          <Row alignItems="center" justifyContent="center">
            <FooterColumn sm={12} md={4}>
              <Icon src={logo1} />
            </FooterColumn>
            <FooterColumn sm={12} md={4}>
              <Icon src={logo2} />
            </FooterColumn>
            <FooterColumn sm={12} md={4}>
              <Icon src={logo3} />
            </FooterColumn>
          </Row>
        </Container>
      </Section>
    );
  }
}

export default Footer;
