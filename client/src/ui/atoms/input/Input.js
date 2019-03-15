import React, { Component } from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  border: 4px solid #1d1d1b;
  width: 100%;
  padding: 1rem;
  font-weight: 400;
  font-size: 1.25rem;
`;

const StyledLabel = styled.label`
  font-size: 1rem;
  line-height: 1rem;
  position: absolute;
  left: 1rem;
  top: -0.525rem;
  background-color: #fff;
  text-transform: uppercase;
  padding: 0.25rem;
`;

const InputContainer = styled.div`
  position: relative;
`;

class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ``
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    this.props.updateParent({ item: this.props.item, data: event.target.value });
    this.forceUpdate();
  }

  render() {
    return (
      <div style={{ padding: '0.5rem 0rem' }}>
        <InputContainer>
          <StyledLabel>{this.props.label}</StyledLabel>
          <StyledInput
            type={this.props.type}
            placeholder={this.props.placeholder}
            onChange={this.handleChange}
          />
        </InputContainer>
      </div>
    );
  }
}

export default Input;
