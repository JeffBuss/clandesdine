import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { firebase, helpers } from 'react-redux-firebase';

import CircularProgress from 'material-ui/CircularProgress';
import injectTapEventPlugin from 'react-tap-event-plugin';

import EventsList from '../../components/eventsList/EventsList';

class App extends Component {
  render () {
    return (
      <EventsList />
    )
  }
}

export default App;
