import { useDispatch, useSelector } from 'react-redux';

import MomentStatus from '../../../types/MomentStatus.types';
import { setTool } from '../../../../core/tool/actions';
import { ReduxStore } from '../../../../core/rootReducer';

import Tool from './Tool/Tool';
import { Panel, Title } from './ToolsPanel.style';
import config from './ToolsPanel.config';

const ToolsPanel = (): JSX.Element => {
  const dispatch = useDispatch();
  const chosenTool = useSelector((store: ReduxStore) => store.tool);
  const { title, items } = config;

  const changeTool = (tool: MomentStatus) => {
    dispatch(setTool(tool));
  }

  return (
    <Panel>
      <Title>{title}</Title>
      {items.map((item, index) => <Tool key={`${index}`} {...item} callBack={changeTool} chosen={chosenTool === item.toolType}/>)}
    </Panel>
  );
}

export default ToolsPanel;
