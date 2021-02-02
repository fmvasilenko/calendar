import { Action } from 'redux';
import MomentStatus from '../../types/MomentStatus.types';

type ActionType = 'SET_TOOL';

interface ToolAction extends Action {
  type: ActionType
  payload: MomentStatus
}

export type {
  ToolAction,
}
