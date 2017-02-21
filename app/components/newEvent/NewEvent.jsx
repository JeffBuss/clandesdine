import React, { Component, PropTypes } from 'react';
import { firebase } from 'react-redux-firebase';
import TextField from 'material-ui/TextField';

class NewEvent extends Component {
  static propTypes = {
    onNewClick: PropTypes.func,
  }

  render() {
    const handleAdd = () => {
      const {
        newEventTitle,
        newEventHost,
      } = this.refs
      const { title, host } = this.state
      this.props.onNewClick({ title, host })
      newEventTitle.value = ''
    }

    return(
      <div>
        <TextField
          floatingLabelText='Event Name'
          ref='newEventTitle'
          onChange={({ target }) => { this.setState({ title: target.value }) }}
        /><br/>
        <TextField
          floatingLabelText='Host'
          ref='newEventHost'
          onChange={({ target }) => { this.setState({ host: target.value }) }}
        />
        <button
          onClick={handleAdd}
        >Add Event</button>
      </div>
    )
  }
}

export default firebase()(NewEvent)
