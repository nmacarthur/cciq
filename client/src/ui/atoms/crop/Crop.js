import React, { Component } from 'react';
import ReactCrop from 'react-image-crop';
import Button from '../button';

import styled from 'styled-components';

import 'react-image-crop/dist/ReactCrop.css';

const StyledButton = styled(Button)`
  background-color: #F0DD00;
  width: 100%;
`;

class Crop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      src: this.props.src,
      crop: {
        aspect: 1,
        width: 50,
        x: 0,
        y: 0
      }
    };
    this.closeandReturn = this.closeandReturn.bind(this);
  }

  onSelectFile = e => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener('load', () => this.setState({ src: reader.result }));
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  onImageLoaded = (image, pixelCrop) => {
    this.imageRef = image;
  };

  onCropComplete = (crop, pixelCrop) => {
    this.makeClientCrop(crop, pixelCrop);
  };

  onCropChange = crop => {
    this.setState({ crop });
  };

  async makeClientCrop(crop, pixelCrop) {
    if (this.imageRef && crop.width && crop.height) {
      const croppedImageUrl = await this.getCroppedImg(this.imageRef, pixelCrop, 'newFile.jpeg');
      this.setState({ croppedImageUrl });
    }
  }

  getCroppedImg(image, pixelCrop, fileName) {
    const canvas = document.createElement('canvas');
    canvas.width = pixelCrop.width;
    canvas.height = pixelCrop.height;
    const ctx = canvas.getContext('2d');

    ctx.drawImage(
      image,
      pixelCrop.x,
      pixelCrop.y,
      pixelCrop.width,
      pixelCrop.height,
      0,
      0,
      pixelCrop.width,
      pixelCrop.height
    );

    return new Promise((resolve, reject) => {
      /*canvas.toBlob(blob => {
        if (!blob) {
          console.error('Canvas is empty');
          return;
        }
        blob.name = fileName;
        window.URL.revokeObjectURL(this.fileUrl);
        this.fileUrl = window.URL.createObjectURL(blob);
        resolve(this.fileUrl);
      }, 'image/jpeg'); */
      const base64Image = canvas.toDataURL('image/jpeg');
      resolve(base64Image);
    });
  }

  closeandReturn() {
    this.props.getCroppedImg({ img: this.state.croppedImageUrl });
  }

  componentWillUnmount() {}

  render() {
    const { crop, src } = this.state;

    return (
      <div>
        {src && (
          <ReactCrop
            src={src}
            crop={crop}
            onImageLoaded={this.onImageLoaded}
            onComplete={this.onCropComplete}
            onChange={this.onCropChange}
          />
        )}
        <StyledButton onClick={this.closeandReturn}>Crop</StyledButton>
      </div>
    );
  }
}

export default Crop;
