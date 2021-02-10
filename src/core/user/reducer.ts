import { UserAction, UserState } from './user.types';

const initialState: UserState = {
  status: 'INITIAL',
  details: null
}

const userReducer = (state: UserState = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case 'USER/CHECK': return {
      status: 'CHECKING',
      details: null,
    };
    case 'USER/AUTHORIZED': return {
      status: 'AUTHORIZED',
      details: action.payload,
    }
    case 'USER/UNAUTHORIZED': return {
      status: 'UNAUTHORIZED',
      details: null,
    }
    case 'USER/SIGNIN': return {
      status: 'SIGNIN',
      details: null,
    }
    case 'USER/SIGNOUT': return {
      status: 'SIGNOUT',
      details: null,
    }
    default: return state;
  }
}

export default userReducer;
