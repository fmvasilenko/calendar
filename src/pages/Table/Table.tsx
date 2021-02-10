import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import queryString from 'query-string';

import { ReduxStore } from '../../core/rootReducer';
import { getEvent } from '../../core/event/actions';
import CalendarTable from '../../shared/view/components/Table/Table';
import ToolsPanel from '../../shared/view/components/ToolsPanel/ToolsPanel';
import PageHeader from '../../shared/view/components/Header/Header';

import { Page, Header, Description, Title, Content, TableTitle, Sidebar, Text } from './Table.style';
import SubmitArea from './components/SubmitArea/SubmitArea';

const Table = (): JSX.Element => {
  const { name, days, hours } = useSelector((state: ReduxStore) => state.event);

  const tableSize = hours.length * 50 + hours.length - 1 + 121;

  const dispatch = useDispatch();

  useEffect(() => {
    const { eventId } = queryString.parse(window.location.search);
    dispatch(getEvent(eventId as string));
  }, [dispatch])

  return (
    <Page tableWidth={tableSize}>
      <Header>
        <PageHeader />
      </Header>
      <Description>
        <Title>{ name || 'Очень важное мероприятие!<br/>Все обязательно приходите!' }</Title>
        <Text>
          Но новая модель организационной деятельности требует определения и уточнения кластеризации усилий! Лишь стремящиеся вытеснить традиционное производство, нанотехнологии в равной степени предоставлены сами себе. Безусловно, убеждённость некоторых оппонентов позволяет выполнить важные задания по разработке вывода текущих активов.
        </Text>
      </Description>
      <Content>
        <TableTitle>Выберите время, когда вам удобно встретиться:</TableTitle>
        <CalendarTable days={days} hours={hours}/>
      </Content>
      <Sidebar>
        <ToolsPanel />
      </Sidebar>
      <SubmitArea />
    </Page>
  );
}

export default Table;
