import React, { Component } from 'react';
import DefaultTemplate from '../templates/defaultTemplate';
import content from '../../content';

class Toowoomba extends Component {
  render() {
    return (
      <div className="App">
        <DefaultTemplate location="Toowoomba" content={content.Toowoomba} />
      </div>
    );
  }
}

export default Toowoomba;
