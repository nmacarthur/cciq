import React, { Component } from 'react';
import DefaultTemplate from '../templates/defaultTemplate';

class Page1 extends Component {
  render() {
    return (
      <div className="App">
        <DefaultTemplate location="Location 1" />
      </div>
    );
  }
}

export default Page1;
