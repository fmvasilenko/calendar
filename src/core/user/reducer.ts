import { UserAction, UserState } from './user.types';

const initialState: UserState = {
  status: 'INITIAL',
  details: null
}

const userReducer = (state: UserState = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case 'CHECKING': return {
      status: 'CHECKING',
      details: null,
    };
    case 'AUTHORIZED': return {
      status: 'AUTHORIZED',
      details: action.payload,
    }
    case 'UNAUTHORIZED': return {
      status: 'UNAUTHORIZED',
      details: null,
    }
    case 'SIGNIN': return {
      status: 'SIGNIN',
      details: null,
    }
    case 'SIGNOUT': return {
      status: 'SIGNOUT',
      details: null,
    }
    default: return state;
  }
}

export default userReducer;
