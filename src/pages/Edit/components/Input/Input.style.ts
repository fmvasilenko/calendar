import styled from 'styled-components';
import getColor from '../../../../shared/helpers/getColor';
import { StyleProps } from './Input.types';

const Label = styled.p<StyleProps>`
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

const InputWrapper = styled.div`
  grid-column: 2;
  margin-left: -10px;
  background: white;
`;

const InputDescription = styled.p`
  margin-top: 5px;
  color: #888;
`;

export {
  Label,
  InputWrapper,
  InputDescription,
}