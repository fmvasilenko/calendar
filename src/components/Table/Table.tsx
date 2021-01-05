import { useState } from 'react';
import TableCell from '../TableCell/TableCell';
import { Props } from './Table.types';

const Table = (props: Props): JSX.Element => {
  const { days, hours } = props;
  const matrix = days.map(() => hours.map(() => 1));
  const [ state, setState ] = useState(matrix);

  const clickHandler = (clickedRow: number, clickedColumn: number) => {
    setState(state.map((row, rowNumber) => {
      return row.map((column, columnNumber) => {
        if (clickedRow === rowNumber && clickedColumn === columnNumber) return 2;
        return state[rowNumber][columnNumber];
      });
    }));
  }

  return (
    <table>
      <thead>
        <tr>
          <th></th>
          { hours.map((hour) => <th>{ hour }</th>) }
        </tr>
      </thead>
      <tbody>
        {
          state.map((row, rowNumber) => (
            <tr>
              <th>{ days[rowNumber] }</th>
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
