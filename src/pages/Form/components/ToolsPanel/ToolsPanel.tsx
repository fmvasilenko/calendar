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
  const { days, hours } = useSelector((state: ReduxStore) => state.event);

  const changeTool = (tool: MomentStatus) => {
    dispatch(setTool(tool));
  }

  if (days.length && hours.length) return (
    <Root>
      <Panel {...{
        ...vocabulary,
        chosenTool,
        callBack: changeTool
      }} />
    </Root>
  );

  return <></>;
};

export default ToolsPanel;
