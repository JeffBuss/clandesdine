import React, { Component, PropTypes } from 'react';
import { firebase } from 'react-redux-firebase';

import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

class ContactForm extends Component {
  static propTypes = {
    onContactClick: PropTypes.func,
  }

  render() {
    const handleContact = () => {
      const {
        contactName,
        contactEmail,
        contactBody,
      } = this.refs
      const { name, email, body } = this.state
      this.props.onContactClick({ name, email, body })
    }

    return(
      <div>
        <TextField
          floatingLabelText='Name'
          ref='contactName'
          onChange={({ target }) => { this.setState({ name: target.value }) }}
        /><br/>
        <TextField
          floatingLabelText='E-Mail'
          ref='contactEmail'
          onChange={({ target }) => { this.setState({ email: target.value }) }}
        /><br/>
        <TextField
          floatingLabelText='Tell us all about it'
          ref='contactBody'
          onChange={({ target }) => { this.setState({ body: target.value }) }}
          multiLine={true}
          rows={4}
        /><br/>
        <FloatingActionButton
          className="contact-btn"
          onClick={handleContact}>
          <ContentAdd />
        </FloatingActionButton>
      </div>
    )
  }
}

export default firebase()(ContactForm)
