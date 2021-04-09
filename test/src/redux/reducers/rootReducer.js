import { combineReducers } from 'redux';
import messageReducer from './messageReducer';


const rootReducer = combineReducers({
  dialog: messageReducer,
});

export default rootReducer;
