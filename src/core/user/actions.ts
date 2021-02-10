import User from '../../shared/types/User.types';
import { UserAction } from './user.types';

const checkUser = (): UserAction => ({
  type: 'USER/CHECK',
  payload: null,
});

const setAuthorized = (user: User): UserAction => ({
  type: 'USER/AUTHORIZED',
  payload: user,
});

const setUnauthorized = (): UserAction => ({
  type: 'USER/UNAUTHORIZED',
  payload: null
});

const signIn = (): UserAction => ({
  type: 'USER/SIGNIN',
  payload: null
});

const signOut = (): UserAction => ({
  type: 'USER/SIGNOUT',
  payload: null
});

export {
  checkUser,
  setAuthorized,
  setUnauthorized,
  signIn,
  signOut,
};
