import MomentStatus from '../../shared/types/MomentStatus.types';
import { ToolAction } from './tool.types';

const toolReducer = (state: MomentStatus = 'free', action: ToolAction): MomentStatus => {
  switch (action.type) {
    case 'TOOL/SET': return action.payload;
    default: return state;
  }
}

export default toolReducer;
