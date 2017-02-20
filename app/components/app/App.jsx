import React, { Component, PropTypes } from 'react';
import Event from '../event/Event';

import { connect } from 'react-redux';
import { firebase, helpers } from 'react-redux-firebase';
const { isLoaded, isEmpty, pathToJS, dataToJS } = helpers

class App extends Component {
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
      ? 'Loading'
      : (isEmpty(events))
        ? 'Event list is empty'
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
])(App)

export default connect(
  ({firebase}) => ({
    events: dataToJS(firebase, 'events'),
    profile: pathToJS(firebase, 'profile')
  })
)(fbWrappedComponent)
// import Invite from '../invite/Invite';
// import Login from '../login/Login';

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <div>This is the app component</div>
//         <Event />
//         <Invite />
//         <Login />
//       </div>
//     );
//   }
// }

// export default App;
