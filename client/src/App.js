import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Page, Page1, Page2, Page3, Page4, Page5 } from './ui/pages';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header" />
          <Route path="/" exact component={Page} />
          <Route path="/location1/" component={Page1} />
          <Route path="/location2/" component={Page2} />
          <Route path="/location3/" component={Page3} />
          <Route path="/location4/" component={Page4} />
          <Route path="/location5/" component={Page5} />
        </div>
      </Router>
    );
  }
}

export default App;
