import { call, put, takeEvery } from 'redux-saga/effects';
import { auth } from '../../shared/services/DB/DB';
import User from '../../shared/types/User.types';
import { setAuthorized, setUnauthorized } from './actions';

function* fetchUser(action: any): Generator {
  try {
    const user: User = (yield call(auth.getUser)) as User;
    yield put(setAuthorized(user));
  } catch (error) {
    yield put(setUnauthorized());
  }
}

function* userSaga() {
  yield takeEvery('CHECKING', fetchUser);
}

export default userSaga;
