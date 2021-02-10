import { all } from 'redux-saga/effects';
import userSaga from './user/saga';
import eventSaga from './event/saga';
import formSaga from './form/saga';

function* rootSaga() {
  yield all([
    ...userSaga,
    ...eventSaga,
    ...formSaga,
  ]);
}

export default rootSaga;
