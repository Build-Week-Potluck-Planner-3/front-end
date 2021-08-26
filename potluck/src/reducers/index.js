import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import potluckReducer from './potluckReducer';
import registerReducer from './registerReducer';

const rootReducer = combineReducers({
  loginReducer,
  potluckReducer,
  registerReducer,
});

export default rootReducer;
