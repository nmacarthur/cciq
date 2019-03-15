import React, { Component } from 'react';
import Dropzone from 'react-dropzone';

import frame from '../../../assets/frame.png';
import img from '../../../assets/frame.png';

import './style.css';

class Filter extends Component {
  constructor() {
    super();
    this.state = {
      files: [],
      imgBlurb: 'data:image/jpeg;base64,',
      uploadedImg: ''
    };
  }
  componentDidMount() {
    this.canvas = this.refs.canvas;
    this.ctx = this.canvas.getContext('2d');
    this.img = this.refs.img;
    this.frame = this.refs.frame;

    this.frame.onload = () => {
      this.ctx.drawImage(this.frame, 0, 0, this.props.width, this.props.height);
    };
  }

  render() {
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
              this.setState({ uploadedImg: base64 });
              this.ctx.drawImage(this.img, 0, 0, this.props.width, this.props.height);
              this.ctx.drawImage(this.frame, 0, 0, this.props.width, this.props.height);
            };

            acceptedFiles.forEach(file => reader.readAsDataURL(file));
          }}
          accept="image/*"
        >
          {({ getRootProps, getInputProps }) => (
            <section>
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <p>Drag 'n' drop some files here, or click to select files</p>
              </div>
            </section>
          )}
        </Dropzone>

        <canvas ref="canvas" width={this.props.width} height={this.props.height} />
        <img
          ref="frame"
          src={frame}
          style={{ width: this.props.width, height: this.props.height }}
          className="hidden"
        />
        <img ref="img" src={this.state.uploadedImg} className="hidden" />
      </div>
    );
  }
}

export default Filter;
