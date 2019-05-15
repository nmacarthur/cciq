import React, { Component } from 'react';

import Default from './default';
import GoldCoast from './goldcoast';
import Cairns from './cairns';
import Mackay from './mackay';
import Toowoomba from './toowoomba';
import Townsville from './townsville';
import Redcliffe from './redcliffe';

class Scorecard extends Component {
  render() {
    if (this.props.location === 'Queensland') {
      return <Default backgroundColor={this.props.backgroundColor} />;
    } else if (this.props.location === 'Mackay') {
      return <Mackay backgroundColor={this.props.backgroundColor} />;
    } else if (this.props.location === 'Redcliffe') {
      return <Redcliffe backgroundColor={this.props.backgroundColor} />;
    } else if (this.props.location === 'Cairns') {
      return <Cairns backgroundColor={this.props.backgroundColor} />;
    } else if (this.props.location === 'Toowoomba') {
      return <Toowoomba backgroundColor={this.props.backgroundColor} />;
    } else if (this.props.location === 'Townsville') {
      return <Townsville backgroundColor={this.props.backgroundColor} />;
    } else if (this.props.location === 'Gold Coast') {
      return <GoldCoast backgroundColor={this.props.backgroundColor} />;
    }
  }
}

export default Scorecard;
