import { Action } from 'redux';
import MomentStatus from '../../shared/types/MomentStatus.types';

type ActionType = 'TOOL/SET';

interface ToolAction extends Action {
  type: ActionType
  payload: MomentStatus
}

export type {
  ToolAction,
}
