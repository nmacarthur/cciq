import React, { Component } from 'react';
import styled from 'styled-components';

import chevron from '../../../assets/chevron.svg';

const Box = styled.div`
  width: 7.5rem;
  height: 7.5rem;
  transform: ${props => (props.direction === 'left' ? 'rotate(180deg)' : 'none')};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  pointer-events: auto;
  cursor: pointer;
`;

class Chevron extends Component {
  constructor({ direction, className, style, onClick }) {
    super();
    this.direction = direction;
    this.className = className;
    this.style = style;
    this.onClick = onClick;
  }

  render() {
    return (
      <Box direction={this.direction} className={this.className} onClick={this.onClick}>
        <img src={chevron} alt={this.direction} />
      </Box>
    );
  }
}

export default Chevron;
