import React, { Component, PropTypes } from 'react';
import { firebase } from 'react-redux-firebase';

class NewEvent extends Component {
  static propTypes = {
    onNewClick: PropTypes.func,
  }

  render() {
    const handleAdd = () => {
      const {
        newEvent
      } = this.refs
      const { text } = this.state
      this.props.onNewClick({ text })
      newEvent.value = ''
    }

    return(
      <div>
        <input
          ref='newEvent'
          onChange={({ target }) => { this.setState({ text: target.value }) }}
        />
        <button
          onClick={handleAdd}
        >Add Event</button>
      </div>
    )
  }
}

export default firebase()(NewEvent)
