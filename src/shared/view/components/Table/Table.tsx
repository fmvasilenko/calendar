import TableCell from '../TableCell/TableCell';
import { Hour, Day } from './Table.style';
import { Props } from './Table.types';

const Table = (props: Props): JSX.Element => {
  const { days, hours, matrix, callBack } = props;

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
                  callBack={ callBack } 
                />) }
            </tr>
          )) 
        }
      </tbody>
    </table>
  );
};

export default Table;
