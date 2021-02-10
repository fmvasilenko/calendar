import { call, put, select, takeLatest } from 'redux-saga/effects';

import { storage } from '../../shared/services/DB/DB';
import { downloadForm } from '../form/actions';
import { ReduxStore } from '../rootReducer';

import { eventReady, setError } from './actions';
import { Event, EventDetails } from './event.types';

function* getEvent(): Generator {
  try {
    const { id } = (yield select((state: ReduxStore) => state.event)) as Event;
    const eventDetails = (yield call(() => storage.getEvent(id))) as EventDetails;
    if (eventDetails) {
      yield put(eventReady(eventDetails));
      yield put(downloadForm());
    } else yield put(setError());
  } catch (error) {
    yield put(setError());
    console.log(error);
  }
}

const watchList = [
  takeLatest('EVENT/GET', getEvent),
]

export default watchList;
