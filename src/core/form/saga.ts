import { call, put, select, takeLatest } from 'redux-saga/effects';

import { storage } from '../../shared/services/DB/DB';
import MomentStatus from '../../shared/types/MomentStatus.types';
import { Event } from '../event/event.types';
import { Form } from './form.types';
import { ReduxStore } from '../rootReducer';

import { changeForm, formSynchronized } from './actions';

function* setClearForm(): Generator {
  const { days, hours } = (yield select((state: ReduxStore) => state.event)) as Event;
  yield put(changeForm(days.map(() => hours.map(() => 'free'))));
}

function* downloadForm(): Generator {
  try {
    const { id } = (yield select((state: ReduxStore) => state.event)) as Event;
    const form = (yield call(() => storage.getTable(id))) as MomentStatus[][];
    if (form) {
      yield put(changeForm(form));
      yield put(formSynchronized());
    } else {
      const { initialized } = (yield select((state: ReduxStore) => state.form)) as Form;
      if (!initialized) yield setClearForm();
    }
  } catch (error) {
    switch (error.name) {
      case 'Unauthorized': {
        console.log('Unauthorized');
        yield setClearForm();
        break;
      }
      default: console.log(error);
    }
  }
}

function* sendForm(): Generator {
  try {
    const { id } = (yield select((state: ReduxStore) => state.event)) as Event;
    const table = (yield select((state: ReduxStore) => state.form.table)) as MomentStatus[][];
    yield call(() => storage.saveTable(id, table));
    yield put(formSynchronized());
  } catch (error) {
    console.log(error);
  }
}

const watchList = [
  takeLatest('FORM/DOWNLOAD', downloadForm),
  takeLatest('USER/AUTHORIZED', downloadForm),
  takeLatest('FORM/SAVE', sendForm),
];

export default watchList;
