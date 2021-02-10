import { Panel, Title } from './ToolsPanel.style';
import Props from './ToolsPanel.types';
import Tool from './Tool/Tool';

const ToolsPanel = (props: Props): JSX.Element => {
  const { title, items, chosenTool, callBack } = props;

  return (
    <Panel>
      <Title>{title}</Title>
      {items.map((item, index) => <Tool key={`${index}`} {...item} callBack={callBack} chosen={chosenTool === item.toolType}/>)}
    </Panel>
  );
}

export default ToolsPanel;
