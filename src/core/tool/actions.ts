import MomentStatus from '../../shared/types/MomentStatus.types';
import { ToolAction } from './tool.types'

const setTool = (tool: MomentStatus): ToolAction => ({
  type: 'TOOL/SET',
  payload: tool,
})

export {
  setTool,
};
