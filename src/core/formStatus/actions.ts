import { FormStatusAction } from './formStatus.types';

const loadForm = (): FormStatusAction => ({
  type: 'FORM/LOADING',
});

const formLoaded = (): FormStatusAction => ({
  type: 'FORM/LOADED',
});

const saveForm = (): FormStatusAction => ({
  type: 'FORM/SAVING',
});

const formSaved = (): FormStatusAction => ({
  type: 'FORM/SAVED',
});

const formError = (): FormStatusAction => ({
  type: 'FORM/ERROR',
});

export {
  loadForm,
  formLoaded,
  saveForm,
  formSaved,
  formError,
};
