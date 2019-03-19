import React, { Component } from 'react';
import styled from 'styled-components';
import firebase from 'firebase';
import download from 'downloadjs';
import nanoid from 'nanoid';
import FileUploader from 'react-firebase-file-uploader';

import Section from '../../atoms/section';
import Container from '../../atoms/container';
import Row from '../../atoms/row';
import Column from '../../atoms/column';
import Input from '../../atoms/input';
import Button from '../../atoms/button';
import TextInput from '../../atoms/textinput';
import Filter from '../../atoms/filter';

import { Heading, Text } from 'rebass';

const SubmitButton = styled(Button)`
  background-color: #f0dd00;
  width: 100%;
`;

var config = {
  apiKey: 'AIzaSyADQDo_zMbgj0o58tr9BsToHtSZqrzOzKI',
  authDomain: 'cciq-smallbusiness.firebaseapp.com',
  databaseURL: 'https://cciq-smallbusiness.firebaseio.com',
  projectId: 'cciq-smallbusiness',
  storageBucket: 'cciq-smallbusiness.appspot.com',
  messagingSenderId: '704392240973'
};
firebase.initializeApp(config);
var db = firebase.firestore();
class PhotoFilter extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      email: 'Email Address',
      name: 'First Name',
      phonenumber: '0411 111 111',
      company: 'Company',
      suburb: 'Suburb',
      postcode: '0000',
      height: '',
      width: '',
      file: ''
    };

    this.updateState = this.updateState.bind(this);
    this.doTheThing = this.doTheThing.bind(this);
  }

  updateState(file) {
    this.setState({
      file: file
    });
  }

  componentDidMount = () => {
    let box = document.getElementById('box');
    let computedStyle = getComputedStyle(box);
    let elHeight = box.clientHeight;
    let elWidth = box.clientWidth;
    elHeight -= parseFloat(computedStyle.paddingTop) + parseFloat(computedStyle.paddingBottom);
    elWidth -= parseFloat(computedStyle.paddingLeft) + parseFloat(computedStyle.paddingRight);
    console.log(elHeight, elWidth);
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
    } else if (item === 'suburb') {
      this.setState({
        suburb: data
      });
    }
  };

  doTheThing() {
    const name = `${nanoid()}.jpg`;
    const file = this.state.file;
    const invoke = this.props.updateOpenState;
    //download(this.state.file, 'download.jpg', 'image/jpeg');
    db.collection('images')
      .add({
        name: name,
        data: file
      })
      .then(function(docRef) {
        console.log('Document written with ID: ', docRef.id);
        invoke();
        download(file, 'download.jpg', 'image/jpeg');
      })
      .catch(function(error) {
        console.error('Error adding document: ', error);
      });
  }

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
                <Text fontSize="1.25rem" py={2}>
                  Acknowledgement: By using the photo filter you agree that CCIQ and it’ s partners
                  may use your image as part of the“ Small business is a big deal” campaign.
                </Text>
                <SubmitButton
                  onClick={() => {
                    this.doTheThing();
                  }}
                >
                  Download
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
