import React, { Component } from 'react';
import styled from 'styled-components';

import Dropzone from 'react-dropzone';

import Crop from '../crop';
import Modal from '../modal/Modal';

import frame from '../../../assets/frame.jpg';
import banner from '../../../assets/banner.jpg';
import placeholder from '../../../assets/placeholder.jpg';

import './style.css';

const StyledImg = styled.img`
  width: 100%;
`;

class Filter extends Component {
  constructor() {
    super();
    this.state = {
      files: [],
      imgBlurb: 'data:image/jpeg;base64,',
      src: '',
      hideCrop: false,
      hideCanvas: true,
      hideDropZone: false,
      croppedImg: ''
    };
    this.getCroppedImg = this.getCroppedImg.bind(this);
    this.updateImg = this.updateImg.bind(this);
  }

  componentDidMount() {
    this.canvas = this.refs.canvas;
    this.ctx = this.canvas.getContext('2d');

    this.setupCanvas(this.canvas);

    this.img = this.refs.img;
    this.frame = this.refs.frame;
    this.banner = this.refs.banner;
  }

  setupCanvas(canvas) {
    // Get the device pixel ratio, falling back to 1.
    var dpr = window.devicePixelRatio || 1;
    // Get the size of the canvas in CSS pixels.
    var rect = canvas.getBoundingClientRect();
    // Give the canvas pixel dimensions of their CSS
    // size * the device pixel ratio.
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    var ctx = canvas.getContext('2d');
    // Scale all drawing operations by the dpr, so you
    // don't have to worry about the difference.
    ctx.scale(dpr, dpr);
    return ctx;
  }

  updateImg() {
    setTimeout(() => {
      const limit = this.props.width - 80;
      this.ctx.drawImage(this.frame, 0, 0, this.props.width, this.props.width);
      this.ctx.drawImage(this.img, 4, 4, this.props.width - 8, this.props.width - 8);
      this.ctx.drawImage(this.banner, 0, limit, this.props.width, 80);
      const framedImage = new Promise((resolve, reject) => {
        const base64Image = this.canvas.toDataURL('image/jpeg');
        resolve(base64Image);
      });
      framedImage.then(value => this.props.updateParent(value));
    }, 200);
  }

  getCroppedImg({ img }) {
    this.setState(
      { croppedImg: img, hideCrop: true, hideCanvas: false, hideDropZone: true },
      this.updateImg()
    );
  }

  render() {
    const { src, hideCrop, croppedImg } = this.state;
    return (
      <div>
        <Dropzone
          onDrop={acceptedFiles => {
            const reader = new FileReader();

            reader.onabort = () => console.log('file reading was aborted');
            reader.onerror = () => console.log('file reading has failed');
            reader.onload = () => {
              // Do whatever you want with the file contents
              const base64 = reader.result;
              this.setState({ src: base64, hideCanvas: true, hideCrop: false, hideDropZone: true });
            };

            acceptedFiles.forEach(file => reader.readAsDataURL(file));
          }}
          accept="image/*"
        >
          {({ getRootProps, getInputProps }) => (
            <section style={{ display: this.state.hideDropZone ? 'none' : 'block' }}>
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <StyledImg src={placeholder} />
              </div>
            </section>
          )}
        </Dropzone>

        <canvas
          ref="canvas"
          style={{ display: this.state.hideCanvas ? 'none' : 'block' }}
          width={this.props.width}
          height={this.props.width}
        />
        <img
          ref="frame"
          src={frame}
          style={{ width: this.props.width, height: this.props.height }}
          className="hidden"
        />
        <img ref="img" src={croppedImg} className="hidden" />
        <img ref="banner" src={banner} className="hidden" />

        {src && !hideCrop && <Crop src={src} getCroppedImg={this.getCroppedImg} />}
      </div>
    );
  }
}

export default Filter;
