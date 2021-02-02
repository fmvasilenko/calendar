import { useDispatch } from 'react-redux';

import MomentStatus from '../../types/MomentStatus.types';
import { setTool } from '../../core/tool/actions';

import Tool from './Tool/Tool';
import { Panel, Title } from './ToolsPanel.style';
import config from './ToolsPanel.config';

const ToolsPanel = (): JSX.Element => {
  const dispatch = useDispatch();
  const { title, items } = config;

  const changeTool = (tool: MomentStatus) => {
    dispatch(setTool(tool));
  }

  return (
    <Panel>
      <Title>{title}</Title>
      {items.map((item) => <Tool {...item} callBack={changeTool} />)}
    </Panel>
  );
}

export default ToolsPanel;
