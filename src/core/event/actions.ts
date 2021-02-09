import Event from '../../shared/types/Event.types';

const setEvent = (event: Event) => ({
  type: 'EVENT/SET',
  payload: event,
});

export {
  setEvent,
};
