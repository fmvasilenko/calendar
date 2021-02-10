import { all, takeLatest } from 'redux-saga/effects';
import { checkUser, signIn, signOut } from './user/saga';
import eventSaga from './event/saga';
import formSaga from './form/saga';

function* rootSaga() {
  yield all([
    takeLatest('CHECKING', checkUser),
    takeLatest('SIGNIN', signIn),
    takeLatest('SIGNOUT', signOut),
    ...eventSaga,
    ...formSaga,
  ]);
}

export default rootSaga;
