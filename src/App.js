import React, { Component } from 'react';
import logo from './logo.svg';
import fetch from 'isomorphic-fetch';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.ocbcApi = this.ocbcApi.bind(this);
  }

  ocbcApi() {

    var request = new Request('https://api.ocbc.com:8243/Children_Accounts/1.1?country=SG', {
      headers: new Headers({
        'Authorization': 'Bearer 98fba084774007d2f58350d29f92ad9d'
      })
    });
    fetch(request).then(function (response) {
      return response.json();
    }).then(function(j) {
      console.log(j.disclaimer);
    }).catch(function (err) {
      console.log(err);
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edits <code>src/App.js</code> and save to reload.
        </p>
        <p>
          <button onClick={this.ocbcApi}>Hi There</button>
        </p>
      </div>
    );
  }
}

export default App;
