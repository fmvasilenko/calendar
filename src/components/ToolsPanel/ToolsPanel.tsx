import Tool from './Tool/Tool';
import { Panel, Title } from './ToolsPanel.style';
import config from './ToolsPanel.config';

const ToolsPanel = (): JSX.Element => {
  const { title, items } = config;

  return (
    <Panel>
      <Title>{title}</Title>
      {items.map((item) => <Tool {...item} />)}
    </Panel>
  );
}

export default ToolsPanel;
