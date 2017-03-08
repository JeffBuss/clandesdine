import React, { Component, PropTypes } from 'react';

import Navbar from '../Navbar/Navbar';
import Theme from '../../theme'

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './App.scss';

injectTapEventPlugin();

export default class App extends Component {
  static childContextTypes = {
    muiTheme: PropTypes.object,
  }

  static contextTypes = {
    store: PropTypes.object.isRequired,
    router: PropTypes.object.isRequired
  }

  static propTypes = {
    children: PropTypes.object
  }

  getChildContext = () => (
    {
      muiTheme: getMuiTheme(Theme)
    }
  )

  render() {
    return (
      <div className='App'>
        <Navbar router={this.context.router}/>
        {this.props.children}
      </div>
    );
  }
}
