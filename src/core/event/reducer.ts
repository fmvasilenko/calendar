import { Event, EventAction } from './event.types';

const initialState: Event = {
  status: 'INITIAL',
  id: '',
  name: '',
  description: '',
  days: [],
  hours: [],
}

const Reducer = (state: Event = initialState, action: EventAction): Event => {
  const { type, payload } = action;

  switch (type) {
    case 'EVENT/GET_EVENT':
    case 'EVENT/READY': return {
      ...state,
      ...payload,
    };
    default: return state;
  };
};

export default Reducer;
