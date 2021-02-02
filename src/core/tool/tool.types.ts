import { Action } from 'redux';

type ActionType = 'SET_TOOL';
type ToolType = 'active' | 'disabled';

interface ToolAction extends Action {
  type: ActionType
  payload: ToolType
}

export type {
  ToolAction,
  ToolType,
}
