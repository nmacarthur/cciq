import React, { Component } from 'react';
import styled from 'styled-components';

import { Heading, Text } from 'rebass';

import Section from '../../atoms/section';
import Container from '../../atoms/container';
import Row from '../../atoms/row';
import Column from '../../atoms/column';
import Card from '../../atoms/card';
import Modal from '../../atoms/modal';

import LobbyMp from '../lobbymp';
import SupporterPack from '../supporterpack';
import PhotoFilter from '../photofilter';

import icon1 from '../../../assets/icon1.svg';
import icon2 from '../../../assets/icon2.svg';
import icon3 from '../../../assets/icon3.svg';

const Icon = styled.img`
  max-width: 100%;
  max-height: 100%;
  margin: auto;
`;

class Tiles extends Component {
  constructor({ backgroundColor, location, content, queensland }) {
    super();
    this.backgroundColor = backgroundColor;
    this.location = location;
    this.state = {
      modal1: false,
      modal2: false,
      modal3: false
    };
    this.content = content;
    this.queensland = queensland;
    this.cardMessage = this.queensland
      ? 'Lobby the PM and Opposition Leader'
      : 'Lobby your local MP';
  }

  render() {
    return (
      <Section backgroundColor={this.backgroundColor} space={4}>
        <Container>
          <Row alignItems="stretch" justifyContent="center">
            <Column padfix sm={12} md={4} my={1}>
              <Card
                onClick={() => {
                  if (!this.state.modal1) {
                    this.setState({
                      modal1: true
                    });
                  }
                }}
              >
                <Icon src={icon1} />
                <Heading textAlign="center" width="80%" mb={1}>
                  Request a free supporter pack
                </Heading>
                <Text textAlign="center"> Get out stickers, flyers and logos </Text>
              </Card>
              <Modal
                modalChild={
                  <SupporterPack
                    updateOpenState={() => {
                      this.setState({
                        modal1: !this.state.modal1
                      });
                    }}
                  />
                }
                isVisible={this.state.modal1}
                updateOpenState={() => {
                  this.setState({
                    modal1: !this.state.modal1
                  });
                }}
              />
            </Column>
            <Column padfix sm={12} md={4} my={1}>
              <Card
                onClick={() => {
                  if (!this.state.modal2) {
                    this.setState({
                      modal2: true
                    });
                  }
                }}
              >
                <Icon src={icon2} />
                <Heading textAlign="center" width="80%" mb={1}>
                  Get social with our photo filter
                </Heading>
                <Text textAlign="center"> Show them you mean business! </Text>
              </Card>
              <Modal
                modalChild={
                  <PhotoFilter
                    updateOpenState={() => {
                      this.setState({
                        modal2: !this.state.modal2
                      });
                    }}
                  />
                }
                isVisible={this.state.modal2}
                updateOpenState={() => {
                  this.setState({
                    modal2: !this.state.modal2
                  });
                }}
              />
            </Column>
            <Column padfix sm={12} md={4} my={1}>
              <Card
                onClick={() => {
                  if (!this.state.modal3) {
                    this.setState({
                      modal3: true
                    });
                  }
                }}
              >
                <Icon src={icon3} />
                <Heading textAlign="center" width="80%" mb={1}>
                  {this.cardMessage}
                </Heading>
                <Text textAlign="center">
                  We’ ve made it easy and drafted the email for you already!
                </Text>
                <Modal
                  modalChild={
                    <LobbyMp
                      updateOpenState={() => {
                        this.setState({
                          modal3: !this.state.modal3
                        });
                      }}
                      mp={this.content.mp}
                      to={this.content.email}
                      queensland={this.queensland}
                    />
                  }
                  isVisible={this.state.modal3}
                  updateOpenState={() => {
                    this.setState({
                      modal3: !this.state.modal3
                    });
                  }}
                />
              </Card>
            </Column>
          </Row>
        </Container>
      </Section>
    );
  }
}

export default Tiles;
