import { Cell, CellMiddle } from './TableCell.style';
import { Props } from './TableCell.types';

const TableCell = (props: Props): JSX.Element => {
  const { status, row, column, callBack } = props;

  switch (status) {
    case 1: return <CellMiddle onClick={ () => callBack(row, column) }/>;
    default: return <Cell onClick={ () => callBack(row, column) }/>
  }
}

export default TableCell;
