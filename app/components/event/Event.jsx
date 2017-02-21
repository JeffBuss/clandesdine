import React, { PropTypes, Component } from 'react';
import { firebase } from 'react-redux-firebase';

class Event extends Component {
  static propTypes = {
    event: PropTypes.object,
    id: PropTypes.string,
  }

  render() {
    const { firebase, event, id } = this.props

    const deleteEvent = (e) => {
      firebase.remove(`/events/${id}`)
    }

    return(
      <li>
        {event.title}<br/>
        {event.host}<br/>
        {event.date}<br/>
        {event.time}<br/>
        {event.menu}<br/>
        <button onClick={deleteEvent}>Delete</button>
      </li>
    )
  }
}

export default firebase()(Event)
