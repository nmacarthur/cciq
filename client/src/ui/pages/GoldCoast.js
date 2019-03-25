import React, { Component } from 'react';
import DefaultTemplate from '../templates/defaultTemplate';
import content from '../../content';

class GoldCoast extends Component {
  render() {
    return (
      <div className="App">
        <DefaultTemplate location="Gold Coast" content={content.GoldCoast} />
      </div>
    );
  }
}

export default GoldCoast;
