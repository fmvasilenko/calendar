import styled from 'styled-components';
import getMomentStatusColor from '../../../helpers/getMomentStatusColor';
import { StyleProps } from './TableCell.types';

const Cell = styled.td<StyleProps>`
  width: 50px;
  height: 50px;
  background: ${(props: StyleProps) => getMomentStatusColor(props.status)};
  cursor: pointer;
  border: 0 solid white;

  &:hover {
    border: 2px solid white;
  }
`;

export {
  Cell,
};
