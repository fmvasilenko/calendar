import { Action } from 'redux';
import MomentStatus from '../../types/MomentStatus.types';

type ActionType = 'SET_TABLE';

interface TableAction extends Action {
  type: ActionType
  payload: MomentStatus[][]
}

export default TableAction;
