import React, { Component } from 'react';
import logo from './logo.svg';
import fetch from 'isomorphic-fetch';
import axios from 'axios';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.ocbcApi = this.ocbcApi.bind(this);

    this.state = {
      ocbcAnswer: "Nothing yet"
    };
  }

  ocbcApi() {
    axios.get('https://api.ocbc.com:8243/Children_Accounts/1.1?country=SG', {
      headers: { 'Authorization': 'Bearer 98fba084774007d2f58350d29f92ad9d' }
    }).then((response) => {
      this.setState({
        ocbcAnswer: response.data.disclaimer
      });
    }).catch((error) => {
      console.log(error);
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
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          <button onClick={this.ocbcApi}>Hi There</button>
          <br />
            { this.state.ocbcAnswer }
        </p>
      </div>
    );
  }
}

export default App;
