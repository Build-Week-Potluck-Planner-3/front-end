import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import potluckReducer from './potluckReducer';

const rootReducer = combineReducers({
  loginReducer,
  potluckReducer
});

export default rootReducer;
