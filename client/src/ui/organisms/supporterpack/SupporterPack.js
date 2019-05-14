import React, { Component } from 'react';
import styled from 'styled-components';
import firebase from 'firebase';

import Section from '../../atoms/section';
import Container from '../../atoms/container';
import Row from '../../atoms/row';
import Column from '../../atoms/column';
import Input from '../../atoms/input';
import Button from '../../atoms/button';

import { Heading, Text } from 'rebass';

const SubmitButton = styled(Button)`
  background-color: #f0dd00;
  width: 100%;
`;

const config = {
  apiKey: 'AIzaSyAg5hq5NV_8ofdHK9BC84u2WHftUV1YPYw',
  authDomain: 'cciq-smallbusiness.firebaseapp.com',
  databaseURL: 'https://cciq-smallbusiness.firebaseio.com',
  projectId: 'cciq-smallbusiness',
  storageBucket: 'cciq-smallbusiness.appspot.com',
  messagingSenderId: '704392240973'
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.firestore();

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
    this.location = props.location;
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

      var today = new Date();
      var dd = String(today.getDate()).padStart(2, '0');
      var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      var yyyy = today.getFullYear();

      today = mm + '' + dd + '' + yyyy;
      const id = `${today}--${this.state.name}`;
      const db_name = this.state.name ? this.state.name : '';
      const db_email = this.state.email ? this.state.email : '';
      const db_company = this.state.company ? this.state.company : '';
      const db_suburb = this.state.suburb ? this.state.suburb : '';
      const db_address = this.state.address ? this.state.address : '';
      const db_postcode = this.state.postcode ? this.state.postcode : '';
      const db_phone = this.state.phone ? this.state.phone : '';

      db.collection('supporterpacks')
        .doc(id)
        .set({
          name: db_name,
          email: db_email,
          address: db_address,
          postcode: db_postcode,
          phone: db_phone,
          location: this.location,
          id: id
        })
        .then(() => {
          console.log('done');
        })
        .catch(error => {
          console.error('Error adding document: ', error);
        });

      invoke();
    } else {
      this.setState({ buttonMessage: 'Please fill out all required fields' });
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
              <Text fontSize="1.25rem">Get our stickers, flyers and logos</Text>
            </Column>
          </Row>
          <form>
            <Row>
              <Column sm={12} md={6}>
                <Input
                  type="text"
                  placeholder={this.state.name}
                  label="Your Name*"
                  item="name"
                  updateParent={this.updateData}
                />
              </Column>
              <Column sm={12} md={6}>
                <Input
                  type="email"
                  placeholder={this.state.email}
                  label="Your Email*"
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
                  label="Your Phone Number*"
                  item="phone"
                  updateParent={this.updateData}
                />
              </Column>
            </Row>
            <Row>
              <Column sm={12}>
                <Input
                  type="text"
                  placeholder={this.state.address}
                  label="Postal Address*"
                  item="address"
                  updateParent={this.updateData}
                />
              </Column>
              <Column sm={12} md={4}>
                <Input
                  type="text"
                  placeholder={this.state.postcode}
                  label="Postcode*"
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
