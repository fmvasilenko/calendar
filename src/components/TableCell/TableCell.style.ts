import styled from 'styled-components';

const Cell = styled.td`
  background: green;
  width: 30px;
  height: 30px;
`;

const CellMiddle = styled(Cell)`
  background: blue;
`;

export {
  Cell,
  CellMiddle
}
