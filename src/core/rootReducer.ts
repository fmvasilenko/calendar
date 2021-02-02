import { combineReducers } from 'redux';
import toolReducer from './tool/reducer';

const rootReducer = combineReducers({
  tool: toolReducer,
});

type ReduxStore = ReturnType<typeof rootReducer>;

export default rootReducer;
export type { ReduxStore };
