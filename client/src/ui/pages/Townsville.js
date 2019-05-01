import React, { Component } from 'react';
import DefaultTemplate from '../templates/defaultTemplate';
import content from '../../content';

class Townsville extends Component {
  render() {
    return (
      <div className="App">
        <DefaultTemplate location="Townsville" queensland={false} content={content.Townsville} />
      </div>
    );
  }
}

export default Townsville;
