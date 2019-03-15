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

class LobbyMp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mp: `Yvette D’Ath`,
      email: 'jim@dundermifflin.com',
      name: 'Jim Halpert',
      company: 'Dunder Mifflin',
      suburb: 'Redcliffe'
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
                Lobby your local MP: Yvette D'Ath
              </Heading>
              <Text fontSize="1.25rem">
                We've made it easy and drafted the email for you already!
              </Text>
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
                <Input
                  type="text"
                  placeholder={this.state.company}
                  label="Your Business Name"
                  item="company"
                  updateParent={this.updateData}
                />
                <Input
                  type="email"
                  placeholder={this.state.email}
                  label="Your Email"
                  updateParent={this.updateData}
                />
                <Input
                  type="text"
                  placeholder={this.state.suburb}
                  label="Your Suburb"
                  item="suburb"
                  updateParent={this.updateData}
                />
                <SubmitButton type="submit">Send!</SubmitButton>
              </Column>
              <Column sm={12} md={6}>
                <TextInput
                  type="text"
                  label="Message"
                  mp={this.state.mp}
                  name={this.state.name}
                  company={this.state.company}
                  suburb={this.state.suburb}
                />
              </Column>
            </Row>
          </form>
        </Container>
      </Section>
    );
  }
}

export default LobbyMp;
