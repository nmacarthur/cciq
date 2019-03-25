import React, { Component } from 'react';
import DefaultTemplate from '../templates/defaultTemplate';
import content from '../../content';

class Mackay extends Component {
  render() {
    return (
      <div className="App">
        <DefaultTemplate location="Mackay" content={content.Mackay} />
      </div>
    );
  }
}

export default Mackay;
