import React, { Component } from 'react';
import styled from 'styled-components';
import firebase from 'firebase';
import download from 'downloadjs';
import nanoid from 'nanoid';

import { Heading, Text } from 'rebass';

import Section from '../../atoms/section';
import Container from '../../atoms/container';
import Row from '../../atoms/row';
import Column from '../../atoms/column';
import Input from '../../atoms/input';
import Button from '../../atoms/button';
import Filter from '../../atoms/filter';

const SubmitButton = styled(Button)`
  background-color: #f0dd00;
  width: 100%;
`;

const config = {
  apiKey: 'AIzaSyADQDo_zMbgj0o58tr9BsToHtSZqrzOzKI',
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

class PhotoFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      company: '',
      height: '',
      width: '',
      file: '',
      buttonText: 'Download'
    };
    this.location = props.location;
    this.updateState = this.updateState.bind(this);
    this.doTheThing = this.doTheThing.bind(this);
  }

  updateState(file) {
    this.setState({
      file
    });
  }

  componentDidMount = () => {
    const box = document.getElementById('box');
    const computedStyle = getComputedStyle(box);
    let elHeight = box.clientHeight;
    let elWidth = box.clientWidth;

    elHeight -= parseFloat(computedStyle.paddingTop) + parseFloat(computedStyle.paddingBottom);
    elWidth -= parseFloat(computedStyle.paddingLeft) + parseFloat(computedStyle.paddingRight);
    this.setState({
      height: elHeight,
      width: elWidth
    });
  };

  updateData = ({ item, data }) => {
    if (item === 'name') {
      this.setState({
        name: data
      });
    } else if (item === 'company') {
      this.setState({
        company: data
      });
    } else if (item === 'email') {
      this.setState({
        email: data
      });
    }
  };

  doTheThing() {
    if (this.isfilled()) {
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, '0');
      var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      var yyyy = today.getFullYear();

      today = mm + '' + dd + '' + yyyy;
      const name = `${today}_${this.state.name}.jpg`;
      const { file } = this.state;
      const invoke = this.props.updateOpenState;

      // download(this.state.file, 'download.jpg', 'image/jpeg');
      const recordname = `${today}--${this.state.name}`;
      db.collection('images')
        .doc(recordname)
        .set({
          name: this.state.name,
          email: this.state.email,
          company: this.state.company,
          data: file
        })
        .then(() => {
          invoke();
          download(file, 'download.jpg', 'image/jpeg');
        })
        .catch(error => {
          console.error('Error adding document: ', error);
        });

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
        `/filter?name=${this.state.name}&email=${this.state.email}&company=${
          this.state.company
        }&location=${this.location}`
      );
      xhr.setRequestHeader('Content-Type', 'application/json');

      xhr.send(data);
    } else {
      this.setState({ buttonText: 'Please fill out all required fields' });
    }
  }

  isfilled = () => {
    return this.state.email && this.state.name && this.state.file;
  };

  render() {
    return (
      <Section space={2}>
        <Container>
          <Row
            alignItems="center"
            justifyContent="center"
            style={{
              marginBottom: '1rem'
            }}
          >
            <Column sm={12}>
              <Heading fontSize="3rem" lineHeight="3.875rem" mb={2}>
                Get social with our photo filter
              </Heading>
              <Text fontSize="1.25rem"> Show them you mean business! </Text>
            </Column>
          </Row>
          <form>
            <Row>
              <Column sm={12} md={6} id="box">
                <Filter
                  width={this.state.width}
                  height={this.state.height}
                  updateParent={this.updateState}
                />
              </Column>
              <Column
                sm={12}
                md={6}
                style={{
                  paddingBottom: '7rem'
                }}
              >
                <Input
                  type="text"
                  placeholder={this.state.name}
                  label="Your Name*"
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
                  item="email"
                  placeholder={this.state.email}
                  label="Your Email*"
                  updateParent={this.updateData}
                />
                <Text fontSize="1.25rem" py={2}>
                  Acknowledgement: By hitting download you agree to letting us use your image, but
                  only for this campaign.
                </Text>
                <SubmitButton
                  onClick={() => {
                    this.doTheThing();
                  }}
                >
                  {this.state.buttonText}
                </SubmitButton>
              </Column>
            </Row>
          </form>
        </Container>
      </Section>
    );
  }
}

export default PhotoFilter;
