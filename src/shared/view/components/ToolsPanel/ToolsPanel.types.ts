import MomentStatus from '../../../types/MomentStatus.types';
import ToolProps from './Tool/Tool.types';

interface Props {
  title: string
  chosenTool: MomentStatus
  items: ToolProps[]
  callBack: (tool: MomentStatus) => void
}

export default Props;
