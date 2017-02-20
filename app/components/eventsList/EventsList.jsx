import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { firebase, helpers } from 'react-redux-firebase';
const { isLoaded, isEmpty, pathToJS, dataToJS } = helpers

import CircularProgress from 'material-ui/CircularProgress';
import Event from '../event/Event';

class EventsList extends Component {
  static propTypes = {
    events: PropTypes.object,
    firebase: PropTypes.shape({
      push: PropTypes.func.isRequired
    })
  }
  render () {
    const { firebase, events } = this.props
    const handleAdd = () => {
      const { newEvent } = this.refs
      firebase.push('/events', { text: newEvent.value, attend: false })
      newEvent.value = ''
    }
    const eventList = (!isLoaded(events))
      ? <CircularProgress />
      : (isEmpty(events))
        ? 'There are no upcoming events'
        : Object.keys(events).map((key) => (
          <Event key={key} id={key} event={events[key]} />
        ))

    return (
      <div>
        <h1>Events</h1>
        {eventList}
        <h2>New Event</h2>
        <input type='text' ref='newEvent'/>
        <button onClick={handleAdd}>Add</button>
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
