import { Vocabulary } from './ToolPanel.types';

const vocabulary: Vocabulary = {
  title: 'Выбранное время:',
  items: [
    {
      toolType: 'busy',
      label: 'Точно занято',
    },
    {
      toolType: 'undesirable',
      label: 'Возможно занято',
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

export default vocabulary;
