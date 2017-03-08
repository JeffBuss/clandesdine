import { createStore, applyMiddleware, compose } from 'redux';
import { reactReduxFirebase } from 'react-redux-firebase';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../reducers/index';

export default function configureStore(initialState, history) {
  const fbConfig = {
    apiKey: 'AIzaSyBHDn1h335ljeF4MLdrFjL2D8WJN95V4MA',
    authDomain: 'clandesdine-6733f.firebaseapp.com',
    databaseURL: 'https://clandesdine-6733f.firebaseio.com',
  };

  const logger = createLogger();

  const createStoreWithMiddleware = compose(
    applyMiddleware(thunk, logger),
    reactReduxFirebase(fbConfig,
      {
        userProfile: 'users',
        enableLogging: false,
      },
    ),
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f,
  )(createStore);
  const store = createStoreWithMiddleware(rootReducer, initialState);
  return store;
}
