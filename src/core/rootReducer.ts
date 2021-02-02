import { combineReducers } from 'redux';
import toolReducer from './tool/reducer';

const rootReducer = combineReducers({
  tool: toolReducer,
});

export default rootReducer;
