import styled from 'styled-components';
import getColor from '../../../../../../shared/helpers/getColor';
import { StyleProps } from './Label.types';

const Root = styled.p<StyleProps>`
  grid-column: 1;
  width: 100%;
  height: 50px;
  padding-left: 15px;
  padding-right: 25px;
  line-height: 46px;
  font-size: 18px;
  color: #333;
  background: ${(props: StyleProps) => getColor(props.background)};
  border: ${(props: StyleProps) => `2px solid ${getColor(props.border || props.background)}`};
  border-right: 0;
  border-radius: 5px 0 0 5px;
  cursor: default;
`;

export {
  Root,
};
