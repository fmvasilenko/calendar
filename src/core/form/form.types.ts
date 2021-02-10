import { Action } from 'redux';
import MomentStatus from '../../shared/types/MomentStatus.types';

type FormStatus = 'INITIAL' | 'DOWNLOADING' | 'SYNCHRONIZED' | 'SAVING' | 'CHANGED';

type FormActionType = 'FORM/DOWNLOAD' | 'FORM/SYNCHRONIZED' | 'FORM/SAVE' | 'FORM/CHANGED';

interface FormPayload {
  status: FormStatus
  table?: MomentStatus[][]
}

interface Form {
  status: FormStatus
  table: MomentStatus[][]
}

interface FormAction extends Action {
  type: FormActionType
  payload: FormPayload
}

export type {
  Form,
  FormAction
}
