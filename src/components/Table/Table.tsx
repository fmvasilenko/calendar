import TableCell from '../TableCell/TableCell';
import { Props } from './Table.types';

const Table = (props: Props): JSX.Element => {
  const { days, hours } = props;

  return (
    <table>
      {
        days.map(() => (
          <tr>
            {
              hours.map(() => <TableCell />)
            }
          </tr>
        )) 
      }
    </table>
  );
};

export default Table;
