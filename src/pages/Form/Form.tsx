import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import { ReduxStore } from '../../core/rootReducer';
import { getEvent } from '../../core/event/actions';
import { changeForm } from '../../core/form/actions';
import CalendarTable from '../../shared/view/components/Table/Table';
import ToolsPanel from '../../shared/view/components/ToolsPanel/ToolsPanel';
import PageHeader from '../../shared/view/components/Header/Header';

import { Page, Header, Description, Title, Content, TableTitle, Sidebar, Text } from './Form.style';
import SubmitArea from './components/SubmitArea/SubmitArea';

const Form = (): JSX.Element => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { eventId } = useParams() as { eventId: string };
  const { status, name, days, hours } = useSelector((state: ReduxStore) => state.event);
  const { table } = useSelector((state: ReduxStore) => state.form);
  const tool = useSelector((state: ReduxStore) => state.tool);

  const tableSize = hours.length * 50 + hours.length - 1 + 121;

  if (status === 'NOTFOUND') history.push('/');

  useEffect(() => {
    dispatch(getEvent(eventId as string));
  }, [dispatch, eventId])

  const clickHandler = (clickedRow: number, clickedColumn: number) => {
    dispatch(changeForm(table.map((row, rowNumber) => {
      return row.map((column, columnNumber) => {
        if (clickedRow === rowNumber && clickedColumn === columnNumber) return tool;
        return table[rowNumber][columnNumber];
      });
    })));
  }

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
      <Content>
        <TableTitle>Выберите время, когда вам удобно встретиться:</TableTitle>
        <CalendarTable days={days} hours={hours} matrix={table} callBack={clickHandler} />
      </Content>
      <Sidebar>
        <ToolsPanel />
      </Sidebar>
      <SubmitArea />
    </Page>
  );
}

export default Form;
