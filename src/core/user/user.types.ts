import { Action } from 'redux';
import User from '../../shared/types/User.types';

type Status = 'AUTHORIZED' | 'UNAUTHORIZED' | 'SIGNIN' | 'SIGNOUT' | 'CHECKING' | 'INITIAL';

interface UserState {
  status: Status
  details: User | null
}

interface UserAction extends Action {
  type: Status
  payload: User | null
}

export type {
  UserState,
  UserAction,
}
