import React, { Component } from 'react';
import Heading from '../../organisms/heading';
import theme from '../../theme';

class DefaultTemplate extends Component {
  render() {
    return (
      <div>
        <Heading backgroundColor={theme.primary} />
      </div>
    );
  }
}

export default DefaultTemplate;
