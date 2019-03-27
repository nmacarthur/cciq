import React, { Component } from 'react';
import styled from 'styled-components';

import Section from '../../atoms/section';
import Container from '../../atoms/container';
import Row from '../../atoms/row';
import Column from '../../atoms/column';

import { Text } from 'rebass';

import footersvg from '../../../assets/footer.svg';
import logo2 from '../../../assets/cciqlogo.svg';
import logo3 from '../../../assets/acclogo.png';

const FooterImg = styled.img`
  width: 100%;
`;

const FooterText = styled(Text)`
  text-align: center;
  color: #e6f500;
  text-transform: uppercase;
`;

const Icon = styled.img`
  max-width: 200px;
  max-height: 100px;
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
  constructor({ backgroundColor, location, content }) {
    super();
    this.backgroundColor = backgroundColor;
    this.location = location;
    this.content = content;
    console.log(this.content);
    this.auth = content.auth;
  }
  render() {
    if (this.content.logo) {
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
            <Row alignItems="center" justifyContent="center" style={{ margin: '4rem 0rem' }}>
              <FooterColumn sm={12} md={4}>
                <Icon src={this.content.logo} />
              </FooterColumn>
              <FooterColumn sm={12} md={4}>
                <Icon src={logo2} />
              </FooterColumn>
              <FooterColumn sm={12} md={4}>
                <Icon src={logo3} />
              </FooterColumn>
            </Row>
            <Row alignItems="center" justifyContent="center">
              <Column sm={12} md={10} justifyContent="center" alignItems="center">
                <FooterText>{this.auth}</FooterText>
              </Column>
            </Row>
          </Container>
        </Section>
      );
    } else {
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
            <Row alignItems="center" justifyContent="center" style={{ margin: '4rem 0rem' }}>
              <FooterColumn sm={12} md={6}>
                <Icon src={logo2} />
              </FooterColumn>
              <FooterColumn sm={12} md={6}>
                <Icon src={logo3} />
              </FooterColumn>
            </Row>
            <Row alignItems="center" justifyContent="center">
              <Column sm={12} md={10} justifyContent="center" alignItems="center">
                <FooterText>{this.auth}</FooterText>
              </Column>
            </Row>
          </Container>
        </Section>
      );
    }
  }
}

export default Footer;
