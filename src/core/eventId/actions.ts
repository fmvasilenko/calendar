import Action from './eventId.types';

const setEventId = (eventId: string | null): Action => ({
  type: 'EVENT_ID/SET',
  payload: eventId,
});

export {
  setEventId,
};
