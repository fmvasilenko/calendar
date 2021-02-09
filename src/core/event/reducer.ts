import Event from '../../shared/types/Event.types';
import EventAction from './event.types';

const Reducer = (state: Event | null = null, action: EventAction) => {
  switch (action.type) {
    case 'EVENT/SET': return action.payload;
    default: return state;
  }
};

export default Reducer;
