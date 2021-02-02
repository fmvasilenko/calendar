import { Cell } from './TableCell.style';
import { Props } from './TableCell.types';

const TableCell = ({
  status, row, column, callBack,
}: Props): JSX.Element => <Cell status={status} onClick={ () => callBack(row, column) }/>

export default TableCell;
