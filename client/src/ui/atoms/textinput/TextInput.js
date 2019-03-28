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

const message = ({ mp, name, email, company, suburb }) => {
  mp += ',';
  if (name) {
    name += ',';
  }
  if (company) {
    company += ',';
  }
  return (
    'Dear ' +
    mp +
    '\n\n' +
    'Small businesses are struggling to survive. Putting extra pressure on them will just force them out of business and hurt the working people they support. I’m asking you to: ' +
    '\n\n' +
    '1. Keep Wages Fair. \n Australia already has the world’s highest minimum wage. Employers will have to cut staff or rosters if politicians force wages up too fast. Let the independent Fair Work Commission do its job.' +
    '\n\n' +
    '2. Make Power Cheaper. \n Some local businesses now pay more for electricity than rent. Australia needs political leadership and a national energy plan.' +
    '\n\n' +
    '3. Get Locals Into Work. \n It should not be hard to find skilled staff. Every young person and jobseeker should be training for a career. We need to get more of them into funded training courses. ' +
    '\n\n' +
    'Small business is not big business. Small employers do not make super profits, pay a fair share of tax, and treat staff like family.' +
    '\n\n' +
    'Small Business is a Big Deal.' +
    '\n\n' +
    name +
    '\n' +
    company +
    '\n' +
    suburb
  );
};
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
        email: this.props.email,
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
      email: nextProps.email,
      company: nextProps.company,
      suburb: nextProps.suburb,
      value: message({
        mp: nextProps.mp,
        name: nextProps.name,
        email: nextProps.email,
        company: nextProps.company,
        suburb: nextProps.suburb
      })
    });
  }

  returnMessage = () => this.state.value;

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
            readOnly
          />
        </InputContainer>
      </div>
    );
  }
}

export default TextInput;
