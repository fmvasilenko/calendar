import { combineReducers } from 'redux';
import toolReducer from './tool/reducer';
import tableReducer from './table/reducer';

const rootReducer = combineReducers({
  tool: toolReducer,
  table: tableReducer,
});

type ReduxStore = ReturnType<typeof rootReducer>;

export default rootReducer;
export type { ReduxStore };
