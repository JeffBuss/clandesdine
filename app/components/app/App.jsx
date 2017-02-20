import React, { Component } from 'react';
import Event from '../event/Event';

class App extends Component {
  render() {
    return (
      <div>
        <div>This is the app component</div>
        <Event />
      </div>
    );
  }
}

export default App;
