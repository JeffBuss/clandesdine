import React, { Component } from 'react';
import Event from '../event/Event';
import Invite from '../invite/Invite';
import Login from '../login/Login';

class App extends Component {
  render() {
    return (
      <div>
        <div>This is the app component</div>
        <Event />
        <Invite />
        <Login />
      </div>
    );
  }
}

export default App;
