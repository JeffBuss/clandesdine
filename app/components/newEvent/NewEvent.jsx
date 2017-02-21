import React, { Component, PropTypes } from 'react';
import { firebase } from 'react-redux-firebase';

import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

class NewEvent extends Component {
  static propTypes = {
    onNewClick: PropTypes.func,
  }

  render() {
    const handleAdd = () => {
      const {
        newEventTitle,
        newEventHost,
        newEventLocation,
        newEventDate,
        newEventTime,
        newEventMenu,
      } = this.refs
      const { title, host, location, date, time, menu } = this.state
      this.props.onNewClick({ title, host, location, date, time, menu })
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
        /><br/>
        <TextField
          floatingLabelText='Location'
          ref='newEventLocation'
          onChange={({ target }) => { this.setState({ location: target.value }) }}
        /><br/>
        <TextField
          floatingLabelText='Date'
          ref='newEventDate'
          onChange={({ target }) => { this.setState({ date: target.value }) }}
        /><br/>
        <TextField
          floatingLabelText='Time'
          ref='newEventTime'
          onChange={({ target }) => { this.setState({ time: target.value }) }}
        /><br/>
        <TextField
          floatingLabelText='Menu'
          ref='newEventMenu'
          onChange={({ target }) => { this.setState({ menu: target.value }) }}
        /><br/>
        <FloatingActionButton
          onClick={handleAdd}>
          <ContentAdd />
        </FloatingActionButton>
      </div>
    )
  }
}

export default firebase()(NewEvent)
