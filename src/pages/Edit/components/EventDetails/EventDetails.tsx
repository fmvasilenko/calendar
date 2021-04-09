import Input from '../../../../shared/view/components/Input/Input';
import { Root, Title, InputArea, Label } from './EventDetails.style';

const EventDetails = (): JSX.Element => {
  return (
    <Root>
      <Title>Детали мероприятия:</Title>

      <InputArea>
        <Label>Название мероприятия</Label>
        <Input placeholder="Самое лучшее мероприятие" />
      </InputArea>

      <InputArea>
        <Label>Возможные дни</Label>
        <Input placeholder="Понедельник, Вторник, Среда" />
      </InputArea>

      <InputArea>
        <Label>Возможные часы</Label>
        <Input placeholder="11:00, 12:00, 13:00, 14:00" />
      </InputArea>
    </Root>
  );
};

export default EventDetails;
