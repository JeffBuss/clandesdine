import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { firebase, helpers } from 'react-redux-firebase';

import GoogleButton from 'react-google-button';

import Paper from 'material-ui/Paper';
import CircularProgress from 'material-ui/CircularProgress';
import Snackbar from 'material-ui/Snackbar';
import RaisedButton from 'material-ui/RaisedButton';

const { pathToJS } = helpers;

class Login extends Component {

  static propTypes = {
    firebase: PropTypes.shape({
      login: PropTypes.func.isRequired
    })
  }

  providerLogin = (provider) => {
    this.setState({ snackCanOpen: true })
    this.props.firebase.login({ provider, type: 'redirect' })
  }

  render() {
    return (
      <div className='Login'>
        <div className='Login-Providers'>
          <GoogleButton onClick={() => this.providerLogin('google')} />
        </div>
      </div>
    )
  }
}

const fbWrappedComponent = firebase([
  '/login'
])(Login)

export default connect(
  ({firebase}) => ({
    profile: pathToJS(firebase, 'profile')
  })
)(fbWrappedComponent)
