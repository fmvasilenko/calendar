import User from '../../shared/types/User.types';
import { UserAction } from './user.types';

const checkUser = (): UserAction => ({
  type: 'CHECKING',
  payload: null,
});

const setAuthorized = (user: User): UserAction => ({
  type: 'AUTHORIZED',
  payload: user,
});

const setUnauthorized = (): UserAction => ({
  type: 'UNAUTHORIZED',
  payload: null
});

const signIn = (): UserAction => ({
  type: 'SIGNIN',
  payload: null
});

const signOut = (): UserAction => ({
  type: 'SIGNOUT',
  payload: null
});

export {
  checkUser,
  setAuthorized,
  setUnauthorized,
  signIn,
  signOut,
};
