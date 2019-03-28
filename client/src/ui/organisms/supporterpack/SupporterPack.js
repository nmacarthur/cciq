import React, { Component } from 'react';
import styled from 'styled-components';

import Section from '../../atoms/section';
import Container from '../../atoms/container';
import Row from '../../atoms/row';
import Column from '../../atoms/column';
import Input from '../../atoms/input';
import Button from '../../atoms/button';

import { Heading, Text } from 'rebass';

const SubmitButton = styled(Button)`
  background-color: #F0DD00;
  width: 100%;
`;

class SupporterPack extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: null,
      name: null,
      phone: null,
      company: null,
      suburb: null,
      address: null,
      postcode: null,
      buttonMessage: 'Send'
    };
    this.mail = this.mail.bind(this);
    this.isfilled = this.isfilled.bind(this);
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
    } else if (item === 'phone') {
      this.setState({ phone: data });
    } else if (item === 'postcode') {
      this.setState({ postcode: data });
    } else if (item === 'address') {
      this.setState({ address: data });
    }
  };

  isfilled = () => {
    return (
      this.state.email &&
      this.state.name &&
      this.state.phone &&
      this.state.company &&
      this.state.suburb &&
      this.state.address &&
      this.state.postcode
    );
  };

  mail = async () => {
    if (this.isfilled()) {
      this.setState({ buttonMessage: 'Thankyou!' });

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
        `/supporter?name=${this.state.name}&email=${this.state.email}&company=${
          this.state.company
        }&suburb=${this.state.suburb}&address=${this.state.address}&postcode=${
          this.state.postcode
        }&phone=${this.state.phone}`
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
                  item="email"
                />
              </Column>
            </Row>
            <Row>
              <Column sm={12} md={6}>
                <Input
                  type="text"
                  placeholder={this.state.phone}
                  label="Your Phone Number"
                  updateParent={this.updateData}
                  item="phone"
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
              <Column sm={12}>
                <Input
                  type="text"
                  placeholder={this.state.address}
                  label="Postal Address"
                  item="address"
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
              <Column sm={12} md={6}>
                <Text>
                  Acknowledgement: By hitting send you’re subscribing to our email list. Your
                  information won’t be shared and you can unsubscribe any time.
                </Text>
              </Column>
              <Column sm={12} md={6}>
                <SubmitButton onClick={this.mail}>{this.state.buttonMessage}</SubmitButton>
              </Column>
            </Row>
          </form>
        </Container>
      </Section>
    );
  }
}

export default SupporterPack;
