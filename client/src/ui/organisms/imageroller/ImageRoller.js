import React, { Component } from 'react';

import firebase from 'firebase';

import styled, { keyframes } from 'styled-components';
import Section from '../../atoms/section';

const db = firebase.firestore();

const size = 24;
const mobile = 18;

const play = keyframes`
  from {
    transform: translateX(0%);
  }

  to {
    transform: translateX(-100%);
  }
`;

const play2 = keyframes`
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(0%);
  }
`;

const Slider = styled.div`
  position: relative;
  /* top margin is for purposes of demo */
  margin-top: 0;
  margin-right: auto;
  margin-left: auto;
  overflow: hidden;
  width: 100%;
  min-height: ${size}rem;
  @media screen and (max-width: 425px) {
    min-height: ${mobile}rem;
  }
`;

const SliderList1 = styled.ul`
  position: absolute;
  left: 0;
  width: calc(${size}rem * 10);
  @media screen and (max-width: 425px) {
    width: calc(${mobile}rem * 10);
  }
  height: 100%;
  padding: 0;
  display: flex;
  -webkit-animation: ${play} linear 60s infinite;
  animation: ${play} linear 60s infinite;
`;

const SliderList2 = styled(SliderList1)`
  -webkit-animation: ${play2} linear 60s infinite;
  animation: ${play2} linear 60s infinite;
`;

const SliderList3 = styled(SliderList1)`
  -webkit-animation: ${play} linear reverse 60s infinite;
  animation: ${play} linear reverse 60s infinite;
`;

const SliderList4 = styled(SliderList1)`
  -webkit-animation: ${play2} linear reverse 60s infinite;
  animation: ${play2} linear reverse 60s infinite;
`;

const Slide = styled.li`
  margin-left: auto;
  margin-right: auto;
  padding: 1rem;
  list-style-type: none;
`;

const SlideImg = styled.img`
  min-width: 100%;
  max-width: 100%;
`;
const images = [];

class ImageRoller extends Component {
  constructor({ backgroundColor, location }) {
    super();
    this.backgroundColor = backgroundColor;
    this.location = location;
    this.state = {
      images: []
    };
    db.collection('images')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          // doc.data() is never undefined for query doc snapshots
          images.push(doc.data().data);
        });
      })
      .then(() => {
        this.setState({
          images
        });
      });
  }

  render() {
    return (
      <Section backgroundColor={this.backgroundColor} space={4}>
        <Slider>
          <SliderList1>
            {this.state.images.map((data, index) => {
              if (index < 10) {
                return (
                  <Slide key={index}>
                    <SlideImg src={data} />
                  </Slide>
                );
              }
            })}
          </SliderList1>
          <SliderList2>
            {this.state.images.map((data, index) => {
              if (index < 10) {
                return (
                  <Slide key={index}>
                    <SlideImg src={data} />
                  </Slide>
                );
              }
            })}
          </SliderList2>
        </Slider>
        <Slider>
          <SliderList3>
            {this.state.images.map((data, index) => {
              if (index > 10 && index <= 20) {
                return (
                  <Slide key={index}>
                    <SlideImg src={data} />
                  </Slide>
                );
              }
            })}
          </SliderList3>
          <SliderList4>
            {this.state.images.map((data, index) => {
              if (index > 10 && index <= 20) {
                return (
                  <Slide key={index}>
                    <SlideImg src={data} />
                  </Slide>
                );
              }
            })}
          </SliderList4>
        </Slider>
      </Section>
    );
  }
}

export default ImageRoller;
