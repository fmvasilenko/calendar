import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReduxStore } from '../../../../core/rootReducer';
import { setTable } from '../../../../core/table/actions';
import MomentStatus from '../../../types/MomentStatus.types';
import TableCell from '../TableCell/TableCell';
import { Hour, Day } from './Table.style';
import { Props } from './Table.types';

const Table = (props: Props): JSX.Element => {
  const { days, hours } = props;
  const dispatch = useDispatch();
  const tool = useSelector((store: ReduxStore) => store.tool);
  const matrix = useSelector((store: ReduxStore) => store.table);

  useEffect(() => {
    const initialState: MomentStatus[][] = days.map(() => hours.map(() => 'free'));
    dispatch(setTable(initialState));
  }, [dispatch, days, hours])

  const clickHandler = (clickedRow: number, clickedColumn: number) => {
    dispatch(setTable(matrix.map((row, rowNumber) => {
      return row.map((column, columnNumber) => {
        if (clickedRow === rowNumber && clickedColumn === columnNumber) return tool;
        return matrix[rowNumber][columnNumber];
      });
    })));
  }

  return (
    <table>
      <thead>
        <tr>
          <th></th>
          { hours.map((hour) => <Hour>{ hour }</Hour>) }
        </tr>
      </thead>
      <tbody>
        {
          matrix.map((row, rowNumber) => (
            <tr>
              <Day>{ days[rowNumber] }</Day>
              { row.map((column, columnNumber) => <TableCell
                  key={`${rowNumber}${columnNumber}`}
                  status={ matrix[rowNumber][columnNumber] }
                  row={ rowNumber }
                  column={ columnNumber }
                  callBack={ clickHandler } 
                />) }
            </tr>
          )) 
        }
      </tbody>
    </table>
  );
};

export default Table;
