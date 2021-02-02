import MomentStatus from '../../types/MomentStatus.types';
import { ToolAction } from './tool.types'

const setTool = (tool: MomentStatus): ToolAction => ({
  type: 'SET_TOOL',
  payload: tool,
})

export {
  setTool,
};
