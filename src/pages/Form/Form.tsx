import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import { ReduxStore } from '../../core/rootReducer';
import { getEvent } from '../../core/event/actions';

import Header from './components/Header/Header';
import Event from './components/Event/Event';
import Table from './components/Table/Table';
import ToolsPanel from './components/ToolsPanel/ToolsPanel';
import SubmitArea from './components/SubmitArea/SubmitArea';
import { Page } from './Form.style';

const Form = (): JSX.Element => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { eventId } = useParams() as { eventId: string };
  const { status, hours } = useSelector((state: ReduxStore) => state.event);

  let tableSize = hours.length * 50 + hours.length - 1 + 121;
  if (tableSize < 375) tableSize = 375;

  if (status === 'NOTFOUND') history.push('/');

  useEffect(() => {
    dispatch(getEvent(eventId as string));
  }, [dispatch, eventId])

  return (
    <Page tableWidth={tableSize}>
      <Header />
      <Event />
      <Table />
      <ToolsPanel />
      <SubmitArea />
    </Page>
  );
}

export default Form;
