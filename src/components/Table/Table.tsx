import { useState } from 'react';
import { useSelector } from 'react-redux';
import { ReduxStore } from '../../core/rootReducer';
import MomentStatus from '../../types/MomentStatus.types';
import TableCell from '../TableCell/TableCell';
import { Hour, Day } from './Table.style';
import { Props } from './Table.types';

const Table = (props: Props): JSX.Element => {
  const { days, hours } = props;
  const matrix: MomentStatus[][] = days.map(() => hours.map(() => 'free'));
  const [ state, setState ] = useState(matrix);
  const tool = useSelector((store: ReduxStore) => store.tool);

  const clickHandler = (clickedRow: number, clickedColumn: number) => {
    setState(state.map((row, rowNumber) => {
      return row.map((column, columnNumber) => {
        if (clickedRow === rowNumber && clickedColumn === columnNumber) return tool;
        return state[rowNumber][columnNumber];
      });
    }))
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
          state.map((row, rowNumber) => (
            <tr>
              <Day>{ days[rowNumber] }</Day>
              { row.map((column, columnNumber) => <TableCell
                  key={`${rowNumber}${columnNumber}`}
                  status={ state[rowNumber][columnNumber] }
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
