import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { firebase, helpers } from 'react-redux-firebase';
const { isLoaded, isEmpty, pathToJS, dataToJS } = helpers
import NewEvent from '../../components/newEvent/NewEvent';

class CreateEvent extends Component {
  static propTypes = {
    events: PropTypes.object,
    firebase: PropTypes.shape({
      push: PropTypes.func.isRequired
    })
  }
  render () {
    const { firebase, events } = this.props
    const handleAdd = (newEvent) => {
      firebase.push('/events', newEvent)
    }

    return (
      <div>
        <h2>Add New Event</h2>
        <NewEvent
          className="new-event-button"
          onNewClick={handleAdd}/>
      </div>
    )
  }
}

const fbWrappedComponent = firebase([
  '/newevent'
])(CreateEvent)

export default connect(
  ({firebase}) => ({
    events: dataToJS(firebase, 'events'),
    profile: pathToJS(firebase, 'profile')
  })
)(fbWrappedComponent)
