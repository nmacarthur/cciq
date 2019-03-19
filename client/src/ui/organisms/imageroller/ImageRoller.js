import React, { Component } from 'react';

import firebase from 'firebase';

import styled, { keyframes } from 'styled-components';
import Section from '../../atoms/section';
import Container from '../../atoms/container';
import Row from '../../atoms/row';
import Column from '../../atoms/column';

import Carousel from 'nuka-carousel';

import eg from '../../../assets/eg.jpg';

var db = firebase.firestore();

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
  height: 26rem;
`;

const SliderList1 = styled.ul`
  position: absolute;
  left: 0;
  width: 200%;
  @media screen and (max-width: 768px) {
    width: 1000%;
  }
  height: 100%;
  padding: 0;
  display: flex;
  -webkit-animation: ${play} linear 40s infinite;
  animation: ${play} linear 40s infinite;
`;

const SliderList2 = styled(SliderList1)`
  -webkit-animation: ${play2} linear 40s infinite;
  animation: ${play2} linear 40s infinite;
`;

const SliderList3 = styled(SliderList1)`
  -webkit-animation: ${play} linear reverse 40s infinite;
  animation: ${play} linear reverse 40s infinite;
`;

const SliderList4 = styled(SliderList1)`
  -webkit-animation: ${play2} linear reverse 40s infinite;
  animation: ${play2} linear reverse 40s infinite;
`;

const Slide = styled.li`
  margin-left: auto;
  margin-right: auto;
  width: 20rem;
  height: 20rem;
  list-style-type: none;
  @media screen and (max-width: 768px) {
    width: 80%;
    margin-left: 1rem;
    margin-right: 1rem;
  }
`;

const SlideImg = styled.img`
  width: 100%;
`;
const images = [];
class ImageRoller extends Component {
  constructor({ backgroundColor, location }) {
    super();
    this.backgroundColor = backgroundColor;
    this.location = location;
    console.log('yep');
    this.state = {
      images: []
    };
    db.collection('images')
      .get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          images.push(doc.data().data);
        });
      })
      .then(() => {
        this.setState({
          images: images
        });
      })
      .catch(function(error) {
        console.log('Error getting documents: ', error);
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
                console.log(index);
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
              if (10 < index && index <= 20) {
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
              if (10 < index && index <= 20) {
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
