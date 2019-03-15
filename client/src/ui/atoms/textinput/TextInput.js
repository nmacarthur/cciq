import React, { Component } from 'react';
import styled from 'styled-components';

const StyledInput = styled.textarea`
  border: 4px solid #1d1d1b;
  width: 100%;
  padding: 1rem;
  font-weight: 400;
  font-size: 1.25rem;
  height: 100%;
  font-family: din-2014;
  font-size: 1rem;
  resize: none;
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
  height: 100%;
`;

const message = ({ mp, name, company, suburb }) =>
  `${mp} MP

Lorem Ipsum Dolor Sit Amet Consectetu
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 

Sincerly ${name},
${company}
${suburb}`;

class TextInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mp: this.props.mp,
      name: this.props.name,
      company: this.props.company,
      suburb: this.props.suburb,
      value: message({
        mp: this.props.mp,
        name: this.props.name,
        company: this.props.company,
        suburb: this.props.suburb
      })
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    // You don't have to do this check first, but it can help prevent an unneeded render
    this.setState({
      mp: nextProps.mp,
      name: nextProps.name,
      company: nextProps.company,
      suburb: nextProps.suburb,
      value: message({
        mp: nextProps.mp,
        name: nextProps.name,
        company: nextProps.company,
        suburb: nextProps.suburb
      })
    });
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div style={{ padding: '0.5rem 0rem', height: '100%' }}>
        <InputContainer>
          <StyledLabel>{this.props.label}</StyledLabel>
          <StyledInput
            type={this.props.type}
            value={this.state.value}
            onChange={this.handleChange}
          />
        </InputContainer>
      </div>
    );
  }
}

export default TextInput;
