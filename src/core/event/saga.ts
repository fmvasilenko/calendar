import { call, put, select } from 'redux-saga/effects';

import { storage } from '../../shared/services/DB/DB';
import Event from '../../shared/types/Event.types';
import { ReduxStore } from '../rootReducer';

import { setEvent } from './actions';

function* getEvent() {
  try {
    const { eventId } = (yield select((state: ReduxStore) => state)) as ReduxStore;
    if (eventId) {
      const event = (yield call(() => storage.getEvent(eventId))) as Event;
      yield put(setEvent(event));
    }
  } catch (error) {
    console.log(error)
  }
}

export {
  getEvent,
};
