import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

const buttonStyle = { color: 'white' };

export default class Navbar extends Component {
  render() {
    return (
      <AppBar
        title={
          <Link to="/" style={buttonStyle}>
            ClandesDine
          </Link>
        }
        iconElementLeft={
          <IconMenu
            iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
            anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
            targetOrigin={{ horizontal: 'left', vertical: 'top' }}
          >
            <MenuItem primaryText="About" />
            <MenuItem primaryText="Media" />
            <MenuItem primaryText="FAQs" />
            <MenuItem primaryText="Contact" />
          </IconMenu>}
      />
    );
  }
}
