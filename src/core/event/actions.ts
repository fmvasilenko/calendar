import { EventAction, EventDetails } from './event.types';

const getEvent = (id: string): EventAction => ({
  type: 'EVENT/GET_EVENT',
  payload: {
    status: 'GETTING_EVENT',
    id,
  },
});

const eventReady = (details: EventDetails): EventAction => ({
  type: 'EVENT/READY',
  payload: {
    status: 'READY',
    ...details,
  },
});

export {
  getEvent,
  eventReady,
};
