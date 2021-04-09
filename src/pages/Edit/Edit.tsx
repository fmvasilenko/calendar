import Header from '../../shared/view/components/Header/Header';
import InputBlock from './components/Input/Input';
import { Page, Title } from './Edit.style';

const Edit = (): JSX.Element => {
  return (
    <Page>
      <Header />
      <Title>Детали мероприятия:</Title>

      {InputBlock({
        label: 'Название:',
        placeholder: 'Самое лучшее мероприятие'
      })}

      {InputBlock({
        label: 'Возможные дни:',
        description: 'Введите возможные для мероприятия дни через запятую. \nНапример: \'Понедельник, Вторник, Среда\' или \'20.02, 21.02, 22.02\'',
        placeholder: 'Понедельник, Вторник, Среда'
      })}

      {InputBlock({
        label: 'Возможные часы:',
        description: 'Введите возможные для мероприятия часы через запятую. \nНапример: \'11:00, 12:00, 13:00, 14:00\'',
        placeholder: '11:00, 12:00, 13:00, 14:00'
      })}

    </Page>
  );
};

export default Edit;
