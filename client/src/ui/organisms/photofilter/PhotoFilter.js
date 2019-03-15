import React, { Component } from 'react';
import styled from 'styled-components';

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

class PhotoFilter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: 'jim@dundermifflin.com',
      name: 'Jim Halpert',
      phonenumber: '0411 111 111',
      company: 'Dunder Mifflin',
      suburb: 'Redcliffe',
      postcode: '4021',
      height: '',
      width: ''
    };
  }

  componentDidMount = () => {
    let elHeight = document.getElementById('box').clientHeight;
    let elWidth = document.getElementById('box').clientWidth;
    console.log(elHeight, elWidth);
    this.setState({
      height: elHeight,
      width: elWidth
    });
  };

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
                Get social with our photo filter
              </Heading>
              <Text fontSize="1.25rem">Show them you mean business!</Text>
            </Column>
          </Row>
          <form>
            <Row>
              <Column sm={12} md={6} id="box">
                <Filter width={this.state.width} height={this.state.height} />
              </Column>
              <Column sm={12} md={6} style={{ paddingBottom: '7rem' }}>
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
                  Acknowledgement: By using the photo filter you agree that CCIQ and it’s partners
                  may use your image as part of the “Small business is a big deal” campaign.
                </Text>

                <SubmitButton type="submit">Send!</SubmitButton>
              </Column>
            </Row>
          </form>
        </Container>
      </Section>
    );
  }
}

export default PhotoFilter;
