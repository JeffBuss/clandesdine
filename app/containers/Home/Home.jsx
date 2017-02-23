import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { firebase, helpers } from 'react-redux-firebase';

import Login from '../Login/Login';
import EventsList from '../../components/eventsList/EventsList';

const { pathToJS, dataToJS } = helpers;

class App extends Component {

  static propTypes = {
    profile: PropTypes.object,
  }

  render() {
    return (
      <div>
        {
          this.props.profile === null
          ?<Login />
          :<EventsList />
        }
      </div>
    )
  }
}

export default App;
