import { ToolAction } from './tool.types';

const toolReducer = (state = 'active', action: ToolAction) => {
  switch (action.type) {
    case 'SET_TOOL': return action.payload;
    default: return state;
  }
}

export default toolReducer;
