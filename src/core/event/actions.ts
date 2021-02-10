import { EventAction, EventDetails } from './event.types';

const getEvent = (id: string): EventAction => ({
  type: 'EVENT/GET',
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

const setError = (): EventAction => ({
  type: 'EVENT/NOTFOUND',
  payload: {
    status: 'NOTFOUND',
  },
});

export {
  getEvent,
  eventReady,
  setError,
};
