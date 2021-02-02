import Button from '../../components/Button/Button';
import CalendarTable from '../../components/Table/Table';
import ToolsPanel from '../../components/ToolsPanel/ToolsPanel';
import { Page, Calendar, Title, Sidebar, SubmitButton } from './Table.style';

const tableProps = {
  days: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница'],
  hours: ['11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00']
}

const Table = (): JSX.Element => {
  return (
    <Page>
      <Calendar>
        <Title>Выберите время, когда вам удобно встретиться:</Title>
        <CalendarTable {...tableProps}/>
      </Calendar>
      <Sidebar>
        <ToolsPanel />
        <SubmitButton>
          <Button label="Отправить"/>
        </SubmitButton>
      </Sidebar>
    </Page>
  );
}

export default Table;
