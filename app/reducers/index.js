import { combineReducers } from 'redux';
import userReducer from './user-reducer';
import inviteReducer from './invite-reducer';

const rootReducer = combineReducers({
  invite: inviteReducer,
});

export default rootReducer;
