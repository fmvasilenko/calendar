import { all, takeLatest } from 'redux-saga/effects';
import { saveForm } from './formStatus/saga';
import { checkUser, signIn, signOut } from './user/saga';

function* rootSaga() {
  yield all([
    takeLatest('CHECKING', checkUser),
    takeLatest('SIGNIN', signIn),
    takeLatest('SIGNOUT', signOut),
    takeLatest('FORM/SAVING', saveForm),
  ]);
}

export default rootSaga;
