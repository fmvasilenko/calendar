import { call, put } from 'redux-saga/effects';
import { auth } from '../../shared/services/DB/DB';
import User from '../../shared/types/User.types';
import { setAuthorized, setUnauthorized } from './actions';

function* checkUser(): Generator {
  try {
    const user: User = (yield call(auth.getUser)) as User;
    yield put(setAuthorized(user));
  } catch (error) {
    yield put(setUnauthorized());
  }
}

function* signIn(): Generator {
  try {
    const user: User = (yield call(auth.signIn)) as User;
    yield put(setAuthorized(user));
  } catch (error) {
    yield put(setUnauthorized());
  }
}

function* signOut(): Generator {
  try {
    yield call(auth.signOut);
    yield put(setUnauthorized());
  } catch (error) {
    console.log(error);
  }
}

export {
  checkUser,
  signIn,
  signOut,
};
