import { call, put, select, takeLatest } from 'redux-saga/effects';

import { storage } from '../../shared/services/DB/DB';
import { downloadForm } from '../form/actions';
import { ReduxStore } from '../rootReducer';

import { eventReady } from './actions';
import { Event, EventDetails } from './event.types';

function* getEvent(): Generator {
  try {
    const { id } = (yield select((state: ReduxStore) => state.event)) as Event;
    const eventDetails = (yield call(() => storage.getEvent(id))) as EventDetails;
    yield put(eventReady(eventDetails));
    yield put(downloadForm());
  } catch (error) {
    console.log(error);
  }
}

const watchList = [
  takeLatest('EVENT/GET_EVENT', getEvent),
]

export default watchList;
