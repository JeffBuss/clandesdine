import { createStore, applyMiddleware } from 'redux';
import { reduxFirebase } from 'react-redux-firebase';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../reducers/index';

const fbConfig = {
  apiKey: 'AIzaSyBHDn1h335ljeF4MLdrFjL2D8WJN95V4MA',
  authDomain: 'clandesdine-6733f.firebaseapp.com',
  databaseURL: 'https://clandesdine-6733f.firebaseio.com',
  storageBucket: 'clandesdine-6733f.appspot.com',
  messagingSenderId: '729519655324',
};

const logger = createLogger();

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk, logger),
  reduxFirebase(fbConfig, { userProfile: 'users' }),
));

export default store;
