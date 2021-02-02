import { ToolAction, ToolType } from './tool.types'

const setTool = (tool: ToolType): ToolAction => ({
  type: 'SET_TOOL',
  payload: tool,
})

export {
  setTool,
};
