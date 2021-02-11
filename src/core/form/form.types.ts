import { Action } from 'redux';
import MomentStatus from '../../shared/types/MomentStatus.types';

type FormStatus = 'INITIAL' | 'DOWNLOADING' | 'SYNCHRONIZED' | 'SAVING' | 'CHANGED';

type FormActionType = 'FORM/DOWNLOAD' | 'FORM/SYNCHRONIZED' | 'FORM/SAVE' | 'FORM/CHANGED';

interface FormPayload {
  status: FormStatus
  initialized?: boolean
  table?: MomentStatus[][]
}

interface Form {
  status: FormStatus
  initialized: boolean
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
