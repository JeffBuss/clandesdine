import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { firebase, helpers } from 'react-redux-firebase';

import Login from '../Login/Login';
import EventsList from '../../components/eventsList/EventsList';

import './Home.scss';

const { pathToJS, dataToJS } = helpers;

class Home extends Component {

  static propTypes = {
    profile: PropTypes.object,
  }

  render() {
    return (
      <div className="home-container">
        {
          this.props.profile === null || !this.props.profile
          ?<Login />
          :<EventsList />
        }
      </div>
    )
  }
}

const fbWrappedComponent = firebase([
  '/home'
])(Home)

export default connect(
  ({firebase}) => ({
    profile: pathToJS(firebase, 'profile'),
  })
)(fbWrappedComponent)
