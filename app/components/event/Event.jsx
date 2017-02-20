import React, { PropTypes, Component } from 'react';
import { firebase } from 'react-redux-firebase';

class Event extends Component {
  static propTypes = {
    event: PropTypes.object,
    id: PropTypes.string,
  }

  render() {
    const { firebase, event, id } = this.props

    const toggleAttend = () => {
      firebase.set(`/events/${id}/attend`, !event.attend)
    }

    const deleteEvent = (e) => {
      firebase.remove(`/events/${id}`)
    }

    return(
      <li>
        <input
          type='checkbox'
          checked={event.attend}
          onChange={toggleAttend}
        />
        {event.text}
        <button onClick={deleteEvent}>Delete</button>
      </li>
    )
  }
}

export default firebase()(Event)
// const Event = (props) => {
//   return (
//     <div>
//       This is the event component
//     </div>
//   );
// };
//
// export default Event;
