import { combineReducers } from 'redux';
import { firebaseStateReducer as firebase } from 'react-redux-firebase';
// import userReducer from './user-reducer';
// import inviteReducer from './invite-reducer';

const rootReducer = combineReducers({
  firebase,
});

export default rootReducer;
