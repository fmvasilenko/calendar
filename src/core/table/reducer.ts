import MomentStatus from '../../shared/types/MomentStatus.types';
import Action from './table.types';

const Reducer = (state: MomentStatus[][] = [['free']], action: Action): MomentStatus[][] => {
  switch (action.type) {
    case 'SET_TABLE': return action.payload;
    default: return state;
  }
};

export default Reducer;
