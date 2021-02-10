import { useDispatch, useSelector } from 'react-redux';
import { changeForm } from '../../../../core/form/actions';
import { ReduxStore } from '../../../../core/rootReducer';
import TableCell from '../TableCell/TableCell';
import { Hour, Day } from './Table.style';
import { Props } from './Table.types';

const Table = (props: Props): JSX.Element => {
  const dispatch = useDispatch();
  const tool = useSelector((store: ReduxStore) => store.tool);
  const { days, hours } = useSelector((store: ReduxStore) => store.event);
  const matrix = useSelector((store: ReduxStore) => store.form.table);

  const clickHandler = (clickedRow: number, clickedColumn: number) => {
    dispatch(changeForm(matrix.map((row, rowNumber) => {
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
          { hours.map((hour, index) => <Hour key={`${index}`}>{ hour }</Hour>) }
        </tr>
      </thead>
      <tbody>
        {
          matrix.map((row, rowNumber) => (
            <tr key={`${rowNumber}`}>
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
