import { Action } from 'redux';

type FormStatus = 'INITIAL' | 'LOADING' | 'LOADED' | 'SAVING' | 'SAVED' | 'ERROR';
type FormStatusActionType = 'FORM/INITIAL' | 'FORM/LOADING' | 'FORM/LOADED' | 'FORM/SAVING' |'FORM/SAVED' | 'FORM/ERROR';

interface FormStatusAction extends Action {
  type: FormStatusActionType
}

export type {
  FormStatus,
  FormStatusAction,
};
