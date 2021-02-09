import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import queryString from 'query-string';

import { setEventId } from '../../core/eventId/actions';
import { loadForm } from '../../core/formStatus/actions';

import SubmitArea from './components/SubmitArea/SubmitArea';
import CalendarTable from '../../shared/view/components/Table/Table';
import ToolsPanel from '../../shared/view/components/ToolsPanel/ToolsPanel';
import PageHeader from '../../shared/view/components/Header/Header';

import { Page, Header, Description, Title, Content, TableTitle, Sidebar, Text } from './Table.style';
import { ReduxStore } from '../../core/rootReducer';

const tableProps = {
  days: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Суббота'],
  hours: ['11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00']
}

const Table = (): JSX.Element => {
  const event = useSelector((state: ReduxStore) => state.event);
  const hours = event ? event.hours : tableProps.hours;

  const tableSize = hours.length * 50 + hours.length - 1 + 121;

  const dispatch = useDispatch();

  useEffect(() => {
    const { eventId } = queryString.parse(window.location.search);
    dispatch(setEventId(eventId as string || null));
    dispatch(loadForm());
  }, [dispatch])

  return (
    <Page tableWidth={tableSize}>
      <Header>
        <PageHeader />
      </Header>
      <Description>
        <Title>{ event?.name || 'Очень важное мероприятие!<br/>Все обязательно приходите!' }</Title>
        <Text>
          Но новая модель организационной деятельности требует определения и уточнения кластеризации усилий! Лишь стремящиеся вытеснить традиционное производство, нанотехнологии в равной степени предоставлены сами себе. Безусловно, убеждённость некоторых оппонентов позволяет выполнить важные задания по разработке вывода текущих активов.
        </Text>
      </Description>
      <Content>
        <TableTitle>Выберите время, когда вам удобно встретиться:</TableTitle>
        <CalendarTable {...(event || tableProps)}/>
      </Content>
      <Sidebar>
        <ToolsPanel />
      </Sidebar>
      <SubmitArea />
    </Page>
  );
}

export default Table;
