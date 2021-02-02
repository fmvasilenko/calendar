import Config from './ToolsPanel.types';

const config: Config = {
  title: 'Инструменты',
  items: [
    {
      toolType: 'active',
      label: 'Tool 1'
    },
    {
      toolType: 'disabled',
      label: 'Tool 2'
    },
    {
      toolType: 'disabled',
      label: 'Tool 3'
    }
  ]
}

export default config;
