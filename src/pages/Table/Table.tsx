import CalendarTable from '../../components/Table/Table';
import ToolsPanel from '../../components/ToolsPanel/ToolsPanel';
import { Title } from './Table.style';

const tableProps = {
  days: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'],
  hours: ['11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00']
}

const Table = (): JSX.Element => {
  return (
    <>
      <Title>Table</Title>
      <CalendarTable {...tableProps}/>
      <ToolsPanel />
    </>
  );
}

export default Table;
