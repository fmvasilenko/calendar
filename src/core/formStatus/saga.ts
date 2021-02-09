import { call, put, select } from 'redux-saga/effects';

import { storage } from '../../shared/services/DB/DB';
import MomentStatus from '../../shared/types/MomentStatus.types';

import { ReduxStore } from '../rootReducer';
import { setTable } from '../table/actions';

import { formError, formLoaded, formSaved } from './actions';

function* saveForm(): Generator {
  try {
    const { table, eventId } = (yield select((state: ReduxStore) => state)) as ReduxStore;
    if (eventId) {
      yield call(() => storage.saveTable(eventId, table));
      yield put(formSaved());
    }
  } catch {
    yield put (formError());
  }
};

function* loadForm(): Generator {
  try {
    const { eventId } = (yield select((state: ReduxStore) => state)) as ReduxStore;
    if (eventId) {
      const table = (yield call(() => storage.getTable(eventId))) as MomentStatus[][] | null;
      if (table) yield put(setTable(table));
      yield put(formLoaded());
    }
  } catch {
    yield put(formError());
  }
}

export {
  saveForm,
  loadForm,
}
