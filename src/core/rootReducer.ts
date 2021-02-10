import { combineReducers } from 'redux';
import userReducer from './user/reducer';
import formReducer from './form/reducer';
import toolReducer from './tool/reducer';
import eventReducer from './event/reducer';

const rootReducer = combineReducers({
  user: userReducer,
  event: eventReducer,
  form: formReducer,
  tool: toolReducer,
});

type ReduxStore = ReturnType<typeof rootReducer>;

export default rootReducer;
export type { ReduxStore };
