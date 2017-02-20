import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { firebase, helpers } from 'react-redux-firebase';
const { isLoaded, isEmpty, pathToJS, dataToJS } = helpers

import CircularProgress from 'material-ui/CircularProgress';

import EventsList from '../eventsList/EventsList';

class App extends Component {
  render () {
    return (
      <EventsList />
    )
  }
}

export default App;
