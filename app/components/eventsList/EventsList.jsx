import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { firebase, helpers } from 'react-redux-firebase';
const { isLoaded, isEmpty, pathToJS, dataToJS } = helpers
import { Link } from 'react-router';

import CircularProgress from 'material-ui/CircularProgress';
import FlatButton from 'material-ui/FlatButton';

import Event from '../event/Event';
import NewEvent from '../newEvent/NewEvent';

import './eventsList.scss';

class EventsList extends Component {
  static propTypes = {
    events: PropTypes.object,
    firebase: PropTypes.shape({
      push: PropTypes.func.isRequired
    })
  }
  render () {
    const { firebase, events, router } = this.props
    const eventList = (!isLoaded(events))
      ? <CircularProgress />
      : (isEmpty(events))
        ? 'There are no upcoming events'
        : Object.keys(events).map((key) => (
          <Event className="events-list" key={key} id={key} event={events[key]} />
        ))

    return (
      <div>
        <h1 className="events-header">Events</h1>
        <div className="events-list">{eventList}</div>
        <FlatButton className="add-event-btn"
          ><Link to='/newevent'>Add a new event</Link>
        </FlatButton>
      </div>
    )
  }
}

const fbWrappedComponent = firebase([
  '/events'
])(EventsList)

export default connect(
  ({firebase}) => ({
    events: dataToJS(firebase, 'events'),
    profile: pathToJS(firebase, 'profile')
  })
)(fbWrappedComponent)
