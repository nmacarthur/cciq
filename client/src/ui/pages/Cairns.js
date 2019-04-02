import React, { Component } from 'react';
import DefaultTemplate from '../templates/defaultTemplate';
import content from '../../content';

class Cairns extends Component {
  render() {
    return (
      <div className="App">
        <DefaultTemplate location="Cairns" content={content.Cairns} />
      </div>
    );
  }
}

export default Cairns;
