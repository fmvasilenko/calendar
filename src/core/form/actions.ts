import MomentStatus from '../../shared/types/MomentStatus.types';
import { FormAction } from './form.types';

const downloadForm = (): FormAction => ({
  type: 'FORM/DOWNLOAD',
  payload: {
    status: 'DOWNLOADING',
  },
});

const formSynchronized = (): FormAction => ({
  type: 'FORM/SYNCHRONIZED',
  payload: {
    status: 'SYNCHRONIZED',
  },
});

const changeForm = (table: MomentStatus[][]): FormAction => ({
  type: 'FORM/CHANGED',
  payload: {
    status: 'CHANGED',
    initialized: true,
    table,
  },
});

const saveForm = (): FormAction => ({
  type: 'FORM/SAVE',
  payload: {
    status: 'SAVING',
  },
});

export {
  downloadForm,
  formSynchronized,
  changeForm,
  saveForm,
};
