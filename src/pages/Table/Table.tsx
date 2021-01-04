import CalendarTable from '../../components/Table/Table';
import { Title } from './Table.style';

const tableProps = {
  days: ['monday', 'tuesday', 'wednesday'],
  hours: ['11:00', '12:00', '13:00', '14:00']
}

const Table = (): JSX.Element => {
  return (
    <>
      <Title>Table</Title>
      <CalendarTable {...tableProps}/>
    </>
  );
}

export default Table;
