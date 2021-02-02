import MomentStatus from '../../types/MomentStatus.types';
import Action from './table.types';

const setTable = (table: MomentStatus[][]): Action => ({
  type: 'SET_TABLE',
  payload: table,
});

export {
  setTable,
};
