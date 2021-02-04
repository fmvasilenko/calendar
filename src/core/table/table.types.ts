import { Action } from 'redux';
import MomentStatus from '../../shared/types/MomentStatus.types';

type ActionType = 'SET_TABLE';

interface TableAction extends Action {
  type: ActionType
  payload: MomentStatus[][]
}

export default TableAction;
