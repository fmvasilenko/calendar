import { combineReducers } from 'redux';
import userReducer from './user/reducer';
import toolReducer from './tool/reducer';
import tableReducer from './table/reducer';
import eventIdReducer from './eventId/reducer';
import formStatusReducer from './formStatus/reducer';

const rootReducer = combineReducers({
  user: userReducer,
  tool: toolReducer,
  table: tableReducer,
  eventId: eventIdReducer,
  formStatus: formStatusReducer,
});

type ReduxStore = ReturnType<typeof rootReducer>;

export default rootReducer;
export type { ReduxStore };
