import EventIdAction from './eventId.types';

const Reducer = (state: string | null = null, action: EventIdAction): string | null => {
  switch (action.type) {
    case 'EVENT_ID/SET': return action.payload;
    default: return state;
  }
};

export default Reducer;
