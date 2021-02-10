import { useDispatch, useSelector } from 'react-redux';
import { changeForm } from '../../../../core/form/actions';
import { ReduxStore } from '../../../../core/rootReducer';
import CalendarTable from '../../../../shared/view/components/Table/Table';
import { Root, TableTitle } from './Table.style';

const Table = (): JSX.Element => {
  const dispatch = useDispatch();
  const { days, hours } = useSelector((state: ReduxStore) => state.event);
  const { table } = useSelector((state: ReduxStore) => state.form);
  const tool = useSelector((state: ReduxStore) => state.tool);

  const clickHandler = (clickedRow: number, clickedColumn: number) => {
    dispatch(changeForm(table.map((row, rowNumber) => {
      return row.map((column, columnNumber) => {
        if (clickedRow === rowNumber && clickedColumn === columnNumber) return tool;
        return table[rowNumber][columnNumber];
      });
    })));
  }

  if (days.length && hours.length && table) return (
    <Root>
      <TableTitle>Выберите время, когда вам удобно встретиться:</TableTitle>
      <CalendarTable days={days} hours={hours} matrix={table} callBack={clickHandler} />
    </Root>
  );

  return <></>;
};

export default Table;
