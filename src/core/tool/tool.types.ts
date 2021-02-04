import { Action } from 'redux';
import MomentStatus from '../../shared/types/MomentStatus.types';

type ActionType = 'SET_TOOL';

interface ToolAction extends Action {
  type: ActionType
  payload: MomentStatus
}

export type {
  ToolAction,
}
