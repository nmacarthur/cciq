import React, { Component } from 'react';
import DefaultTemplate from '../templates/defaultTemplate';
import content from '../../content';

class Queensland extends Component {
  render() {
    return (
      <div className="App">
        <DefaultTemplate location="Queensland" queensland={true} content={content.Queensland} />
      </div>
    );
  }
}

export default Queensland;
