import { combineReducers } from 'redux';
import userReducer from './user/reducer';
import toolReducer from './tool/reducer';
import tableReducer from './table/reducer';

const rootReducer = combineReducers({
  user: userReducer,
  tool: toolReducer,
  table: tableReducer,
});

type ReduxStore = ReturnType<typeof rootReducer>;

export default rootReducer;
export type { ReduxStore };
