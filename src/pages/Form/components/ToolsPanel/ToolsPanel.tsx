import { useDispatch, useSelector } from 'react-redux';
import { ReduxStore } from '../../../../core/rootReducer';
import { setTool } from '../../../../core/tool/actions';
import MomentStatus from '../../../../shared/types/MomentStatus.types';
import Panel from '../../../../shared/view/components/ToolsPanel/ToolsPanel';
import vocabulary from './ToolsPanel.ru';
import { Root } from './ToolsPanel.style';

const ToolsPanel = (): JSX.Element => {
  const dispatch = useDispatch();
  const chosenTool = useSelector((store: ReduxStore) => store.tool);

  const changeTool = (tool: MomentStatus) => {
    dispatch(setTool(tool));
  }

  return (
    <Root>
      <Panel {...{
        ...vocabulary,
        chosenTool,
        callBack: changeTool
      }} />
    </Root>
  );
};

export default ToolsPanel;
