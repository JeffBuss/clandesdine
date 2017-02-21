import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import AppBar from 'material-ui/AppBar';

const buttonStyle = { color: 'white' };

export default class Navbar extends Component {
  render() {
    return (
      <AppBar
        title={
          <Link to='/' style={buttonStyle}>
            ClandesDine
          </Link>
        }
        showMenuIconButton={false}
      />
    );
  }
}
