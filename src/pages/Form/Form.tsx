import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import { ReduxStore } from '../../core/rootReducer';
import { getEvent } from '../../core/event/actions';
import PageHeader from '../../shared/view/components/Header/Header';

import { Page, Header, Description, Title, Text } from './Form.style';
import Table from './components/Table/Table';
import ToolsPanel from './components/ToolsPanel/ToolsPanel';
import SubmitArea from './components/SubmitArea/SubmitArea';

const Form = (): JSX.Element => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { eventId } = useParams() as { eventId: string };
  const { status, name, hours } = useSelector((state: ReduxStore) => state.event);

  let tableSize = hours.length * 50 + hours.length - 1 + 121;
  if (tableSize < 375) tableSize = 375;

  if (status === 'NOTFOUND') history.push('/');

  useEffect(() => {
    dispatch(getEvent(eventId as string));
  }, [dispatch, eventId])

  return (
    <Page tableWidth={tableSize}>
      <Header>
        <PageHeader />
      </Header>
      <Description>
        <Title>{ name }</Title>
        <Text>
          Но новая модель организационной деятельности требует определения и уточнения кластеризации усилий! Лишь стремящиеся вытеснить традиционное производство, нанотехнологии в равной степени предоставлены сами себе. Безусловно, убеждённость некоторых оппонентов позволяет выполнить важные задания по разработке вывода текущих активов.
        </Text>
      </Description>
      <Table />
      <ToolsPanel />
      <SubmitArea />
    </Page>
  );
}

export default Form;
