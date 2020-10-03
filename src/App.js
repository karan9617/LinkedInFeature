import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Forms from './Components/Forms';
import { render } from 'react-dom';
import MainFile from './Components/MainFile';
import ReferralClass from './Components/ReferralPage/ReferralClass'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>


        <Switch>
          <Route path="/" exact component={Forms} />


          <Route path="/login" exact component={MainFile} />
          <Route path="/referral" exact component={ReferralClass} />
        </Switch>
      </Router>
    );

  }
}

export default App;
