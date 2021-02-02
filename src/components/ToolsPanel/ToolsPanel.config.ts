import Config from './ToolsPanel.types';

const config: Config = {
  title: 'Выбранное время:',
  items: [
    {
      toolType: 'busy',
      label: 'Точно занято'
    },
    {
      toolType: 'undesirable',
      label: 'Возможно занято'
    },
    {
      toolType: 'free',
      label: 'Свободно'
    },
    {
      toolType: 'preferred',
      label: 'Предпочтительно'
    }
  ]
}

export default config;
