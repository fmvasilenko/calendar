import { Action } from 'redux';
import User from '../../shared/types/User.types';

type Status = 'INITIAL' | 'CHECKING' | 'AUTHORIZED' | 'UNAUTHORIZED' | 'SIGNIN' | 'SIGNOUT';

type UserActionType = 'USER/CHECK' | 'USER/AUTHORIZED' | 'USER/UNAUTHORIZED' | 'USER/SIGNIN' | 'USER/SIGNOUT';

interface UserState {
  status: Status
  details: User | null
}

interface UserAction extends Action {
  type: UserActionType
  payload: User | null
}

export type {
  UserState,
  UserAction,
}
