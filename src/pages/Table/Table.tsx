import { useDispatch } from 'react-redux';
import Button from '../../components/Button/Button';
import CalendarTable from '../../components/Table/Table';
import ToolsPanel from '../../components/ToolsPanel/ToolsPanel';
import PageHeader from '../../components/Header/Header';
import { setTable } from '../../core/table/actions';
import { Page, Header, Description, Title, Content, TableTitle, Sidebar, SubmitArea, SubmitButton, Text } from './Table.style';

const tableProps = {
  days: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница'],
  hours: ['11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00']
}

const Table = (): JSX.Element => {
  const { days, hours } = tableProps;
  const dispatch = useDispatch();

  const clearTable = () => {
    dispatch(setTable(days.map(() => hours.map(() => 'free'))));
  }

  return (
    <Page>
      <Header>
        <PageHeader />
      </Header>
      <Description>
        <Title>Очень важное мероприятие!<br/>Все обязательно приходите!</Title>
        <Text>
          Но новая модель организационной деятельности требует определения и уточнения кластеризации усилий! Лишь стремящиеся вытеснить традиционное производство, нанотехнологии в равной степени предоставлены сами себе. Безусловно, убеждённость некоторых оппонентов позволяет выполнить важные задания по разработке вывода текущих активов.
        </Text>
      </Description>
      <Content>
        <TableTitle>Выберите время, когда вам удобно встретиться:</TableTitle>
        <CalendarTable {...tableProps}/>
      </Content>
      <Sidebar>
        <ToolsPanel />
      </Sidebar>
      <SubmitArea>
        <Button color="red" label="Очистить" onClick={clearTable} />
        <SubmitButton>
          <Button color="green" label="Отправить"/>
        </SubmitButton>
      </SubmitArea>
    </Page>
  );
}

export default Table;
