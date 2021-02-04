import { all, takeLatest } from 'redux-saga/effects';
import { checkUser, signIn, signOut } from './user/saga';

function* rootSaga() {
  yield all([
    takeLatest('CHECKING', checkUser),
    takeLatest('SIGNIN', signIn),
    takeLatest('SIGNOUT', signOut)
  ]);
}

export default rootSaga;
