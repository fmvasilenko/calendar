import { all, takeLatest } from 'redux-saga/effects';
import { getEvent } from './event/saga';
import { loadForm, saveForm } from './formStatus/saga';
import { checkUser, signIn, signOut } from './user/saga';

function* rootSaga() {
  yield all([
    takeLatest('CHECKING', checkUser),
    takeLatest('SIGNIN', signIn),
    takeLatest('SIGNOUT', signOut),
    takeLatest('FORM/SAVING', saveForm),
    takeLatest('FORM/LOADING', loadForm),
    takeLatest('EVENT_ID/SET', getEvent),
  ]);
}

export default rootSaga;
