import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Queensland, GoldCoast, Mackay, Redcliffe, Toowoomba, Cairns } from './ui/pages';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header" />
          <link rel="stylesheet" href="https://use.typekit.net/nid5eec.css" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/css/swiper.min.css"
          />

          <Route path="/" exact component={Queensland} />
          <Route path="/goldcoast/" component={GoldCoast} />
          <Route path="/mackay/" component={Mackay} />
          <Route path="/redcliffe/" component={Redcliffe} />
          <Route path="/toowoomba/" component={Toowoomba} />
          <Route path="/cairns/" component={Cairns} />
        </div>
      </Router>
    );
  }
}

export default App;
