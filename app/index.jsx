import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './store/store';

import About from './containers/About/About';
import App from './containers/App/App';
import Contact from './containers/Contact/Contact';
import CreateEvent from './containers/CreateEvent/CreateEvent';
import Faqs from './containers/Faqs/Faqs';
import Home from './containers/Home/Home';
import Login from './containers/Login/Login';
import Media from './containers/Media/Media';
import Signup from './containers/Signup/Signup';

const initialState = window.__INITIAL_STATE__ || { firebase: { authError: null } };

const store = configureStore(initialState, browserHistory);

let main = document.getElementById('main');

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/login" component={Login} />
        <Route path="/faqs" component={Faqs} />
        <Route path="/media" component={Media} />
        <Route path="/newevent" component={CreateEvent} />
        <Route path="/signup" component={Signup} />
      </Route>
    </Router>
  </Provider>, main,
);
