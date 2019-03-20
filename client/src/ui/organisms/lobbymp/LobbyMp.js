import React, { Component } from 'react';
import styled from 'styled-components';

import { Heading, Text } from 'rebass';

import Section from '../../atoms/section';
import Container from '../../atoms/container';
import Row from '../../atoms/row';
import Column from '../../atoms/column';
import Input from '../../atoms/input';
import Button from '../../atoms/button';
import TextInput from '../../atoms/textinput';

const SubmitButton = styled(Button)`
  background-color: #f0dd00;
  width: 100%;
`;

class LobbyMp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mp: `MP Name`,
      email: '',
      name: '',
      company: '',
      suburb: '',
      message: '',
      buttonMessage: 'Send'
    };
    this.child = React.createRef();
  }

  updateData = ({ item, data }) => {
    if (item === 'name') {
      this.setState({ name: data });
    } else if (item === 'company') {
      this.setState({ company: data });
    } else if (item === 'suburb') {
      this.setState({ suburb: data });
    } else if (item === 'email') {
      this.setState({ email: data });
    }
  };

  isfilled = () => {
    return this.state.name && this.state.company && this.state.suburb && this.state.email;
  };

  mail = async () => {
    if (this.isfilled()) {
      const value = this.child.current.returnMessage();
      var data = JSON.stringify(false);

      var xhr = new XMLHttpRequest();
      xhr.withCredentials = true;

      xhr.addEventListener('readystatechange', function() {
        if (this.readyState === 4) {
          console.log(this.responseText);
        }
      });

      xhr.open(
        'POST',
        `/mail?name=${this.state.name}&email=${this.state.email}&company=${
          this.state.company
        }&suburb=${this.state.suburb}&mp=${this.state.mp}&message=${value}`
      );
      xhr.setRequestHeader('Content-Type', 'application/json');

      xhr.send(data);
      const invoke = this.props.updateOpenState;
      invoke();
    } else {
      this.setState({ buttonMessage: 'Please fill out all fields' });
    }
  };

  render() {
    return (
      <Section space={2}>
        <Container>
          <Row alignItems="center" justifyContent="center" style={{ marginBottom: '1rem' }}>
            <Column sm={12}>
              <Heading fontSize="3rem" lineHeight="3.875rem" mb={2}>
                Lobby your local MP: Yvette D’Ath
              </Heading>
              <Text fontSize="1.25rem">
                We’ve made it easy and drafted the email for you already!
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
                  item="email"
                />
                <Input
                  type="text"
                  placeholder={this.state.suburb}
                  label="Your Suburb"
                  item="suburb"
                  updateParent={this.updateData}
                />
                <SubmitButton onClick={this.mail}>{this.state.buttonMessage}</SubmitButton>
              </Column>
              <Column sm={12} md={6}>
                <TextInput
                  type="text"
                  label="Message"
                  ref={this.child}
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
