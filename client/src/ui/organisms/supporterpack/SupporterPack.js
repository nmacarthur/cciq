import React, { Component } from 'react';
import styled from 'styled-components';

import Section from '../../atoms/section';
import Container from '../../atoms/container';
import Row from '../../atoms/row';
import Column from '../../atoms/column';
import Input from '../../atoms/input';
import Button from '../../atoms/button';
import TextInput from '../../atoms/textinput';

import { Heading, Text } from 'rebass';

const SubmitButton = styled(Button)`
  background-color: #f0dd00;
  width: 100%;
`;

class SupporterPack extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: 'jim@dundermifflin.com',
      name: 'Jim Halpert',
      phonenumber: '0411 111 111',
      company: 'Dunder Mifflin',
      suburb: 'Redcliffe',
      postcode: '4021'
    };
  }

  updateData = ({ item, data }) => {
    if (item === 'name') {
      this.setState({ name: data });
    } else if (item === 'company') {
      this.setState({ company: data });
    } else if (item === 'suburb') {
      this.setState({ suburb: data });
    }
  };

  render() {
    return (
      <Section space={2}>
        <Container>
          <Row alignItems="center" justifyContent="center" style={{ marginBottom: '1rem' }}>
            <Column sm={12}>
              <Heading fontSize="3rem" lineHeight="3.875rem" mb={2}>
                Request a free supporter pack
              </Heading>
              <Text fontSize="1.25rem">Stickers, posters, flyers, oh my!</Text>
            </Column>
          </Row>
          <form>
            <Row>
              <Column sm={12} md={6}>
                <Input
                  type="text"
                  placeholder={this.state.name}
                  label="Your Name"
                  item="name"
                  updateParent={this.updateData}
                />
              </Column>
              <Column sm={12} md={6}>
                <Input
                  type="email"
                  placeholder={this.state.email}
                  label="Your Email"
                  updateParent={this.updateData}
                />
              </Column>
            </Row>
            <Row>
              <Column sm={12} md={6}>
                <Input
                  type="text"
                  placeholder={this.state.phonenumber}
                  label="Your Phone Number"
                  updateParent={this.updateData}
                />
              </Column>
              <Column sm={12} md={6}>
                <Input
                  type="text"
                  placeholder={this.state.company}
                  label="Your Business Name"
                  item="company"
                  updateParent={this.updateData}
                />
              </Column>
            </Row>
            <Row>
              <Column sm={12} md={8}>
                <Input
                  type="text"
                  placeholder={this.state.suburb}
                  label="Your Suburb"
                  item="suburb"
                  updateParent={this.updateData}
                />
              </Column>
              <Column sm={12} md={4}>
                <Input
                  type="text"
                  placeholder={this.state.postcode}
                  label="Postcode"
                  item="postcode"
                  updateParent={this.updateData}
                />
              </Column>
            </Row>
            <Row>
              <Column sm={12}>
                <Input
                  type="text"
                  placeholder={this.state.suburb}
                  label="Street Address"
                  item="suburb"
                  updateParent={this.updateData}
                />
              </Column>
            </Row>
            <Row>
              <Column sm={12} md={6}>
                <Text>
                  Acknowledgement: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                  eiusmod tempor incididunt.
                </Text>
              </Column>
              <Column sm={12} md={6}>
                <SubmitButton type="submit">Send!</SubmitButton>
              </Column>
            </Row>
          </form>
        </Container>
      </Section>
    );
  }
}

export default SupporterPack;
