import React, { Component } from 'react';
import styled from 'styled-components';

import xsvg from '../../../assets/cross.svg';

const StyledButton = styled.div`
  background-color: #e6f500;
  padding: 0.5rem;
  position: absolute;
  right: 2.15625rem;
  top: 1rem;
  color: #1d1d1b;
  border: 4px solid #1d1d1b;
  cursor: pointer;
  border-radius: 2px;
  font-weight: 600;
  display: inline-block;
  -webkit-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
  -webkit-box-shadow: 5px 5px 0 0 #1d1d1b;
  box-shadow: 5px 5px 0 0 #1d1d1b;
  z-index: 9999;
  :hover {
    transform: translate(2.5px, 2.5px);
    -webkit-box-shadow: 0px 0px 0 0 #1d1d1b;
    box-shadow: 0px 0px 0 0 #1d1d1b;
  }
`;

class CloseButton extends Component {
  render() {
    return (
      <div>
        <StyledButton>
          <img src={xsvg} />
        </StyledButton>
      </div>
    );
  }
}

export default CloseButton;
