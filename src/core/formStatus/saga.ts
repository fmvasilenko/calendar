import { call, put, select } from 'redux-saga/effects';
import { storage } from '../../shared/services/DB/DB';
import { ReduxStore } from '../rootReducer';

function* saveForm(): Generator {
  try {
    const { table, eventId } = (yield select((state: ReduxStore) => state)) as ReduxStore;
    if (eventId) {
      yield call(() => storage.saveTable(eventId, table));
      yield put({
        type: 'FORM/SAVED',
      });
    }
  } catch {
    yield put ({
      type: 'FORM/ERROR',
    });
  }
};

function* loadForm(): Generator {

}

export {
  saveForm,
  loadForm,
}
