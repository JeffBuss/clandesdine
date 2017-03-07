import React, { Component, PropTypes } from 'react';
import ContactForm from '../../components/contactForm/ContactForm'
import { connect } from 'react-redux';
import { firebase, helpers } from 'react-redux-firebase';
const { dataToJS } = helpers;

class Contact extends Component {
  static propTypes = {
    contact: PropTypes.object,
    firebase: PropTypes.shape({
      push: PropTypes.func.isRequired
    })
  }

  render() {
    const { firebase, contact } = this.props
    const handleContact = (newContact) => {
      firebase.push('/contact', newContact)
    }
    return (
      <div>
        <ContactForm onContactClick={handleContact}/>
      </div>
    );
  }
}

const fbWrappedComponent = firebase([
  '/contact'
])(Contact)

export default connect(
  ({firebase}) => ({
    contact: dataToJS(firebase, 'contact'),
  })
)(fbWrappedComponent)
