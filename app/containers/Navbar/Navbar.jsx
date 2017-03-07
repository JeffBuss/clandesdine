import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton'
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

const buttonStyle = { color: 'white' };

import { connect } from 'react-redux'
import { firebase, helpers } from 'react-redux-firebase'
const { pathToJS } = helpers

class Navbar extends Component {
  static propTypes = {
    profile: PropTypes.object,
    firebase: PropTypes.shape({
      logout: PropTypes.func.isRequired
    })
  }

  render() {
    const { profile, router } = this.props

    const userMenu = profile ? (
      <div className='Navbar-Main-Menu'>
        <FlatButton
          className='sign-out-btn'
          label='Sign Out'
          style={buttonStyle}
          onClick={() => this.props.firebase.logout()}
        />
      </div>
    ) : signInPrompt

    const signInPrompt = (
      <div>Sign in below</div>
    )

    return (
      <AppBar
        title={
          <Link to="/" style={buttonStyle}>
            ClandesDine
          </Link>
        }
        iconElementLeft={
          <IconMenu
            className="menu-dropdown"
            iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
            anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
            targetOrigin={{ horizontal: 'left', vertical: 'top' }}
          >
            <MenuItem
              className="about-dropdown"
              primaryText="About"
              onClick={() => router.push('/about')}
            />
            <MenuItem
              className="media-dropdown"
              primaryText="Media"
              onClick={() => router.push('/media')}
            />
            <MenuItem
              className="faqs-dropdown"
              primaryText="FAQs"
              onClick={() => router.push('/faqs')}
            />
            <MenuItem
              className="contact-dropdown"
              primaryText="Contact"
              onClick={() => router.push('/contact')}
            />
          </IconMenu>}
        iconElementRight={userMenu}
      />
    );
  }
}

const fbWrappedComponent = firebase([
  '/navbar'
])(Navbar)

export default connect(
  ({firebase}) => ({
    profile: pathToJS(firebase, 'profile')
  })
)(fbWrappedComponent)
