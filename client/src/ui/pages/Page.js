import React, { Component } from 'react';
import DefaultTemplate from '../templates/defaultTemplate';

class Page extends Component {
  render() {
    return (
      <div className="App">
        <DefaultTemplate location="Redcliffe" />
      </div>
    );
  }
}

export default Page;
