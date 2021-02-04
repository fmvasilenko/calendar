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

export {
  checkUser,
  setAuthorized,
  setUnauthorized,
};
