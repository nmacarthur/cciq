import React, { Component } from 'react';
import DefaultTemplate from '../templates/defaultTemplate';
import content from '../../content';

class Redcliffe extends Component {
  render() {
    return (
      <div className="App">
        <DefaultTemplate location="Redcliffe" content={content.Redcliffe} />
      </div>
    );
  }
}

export default Redcliffe;
