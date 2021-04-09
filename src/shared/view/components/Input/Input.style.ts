import styled from 'styled-components';
import getColor from '../../../helpers/getColor';
import { StyleProps } from './Input.types';

const Root = styled.input<StyleProps>`
  width: 100%;
  height: 50px;
  padding: 0 10px;
  color: ${(props: StyleProps) => getColor(props.color)};
  border: ${(props: StyleProps) => props.border ? `2px solid ${getColor(props.border)}` : '0'};
  border-left: 0;
  border-radius: ${(props: StyleProps) => props.borderRadius};
  background: none;
  font-size: 20px;

  &::placeholder {
    color: #ccc;
  }

  &:focus {
    outline: none;
  }
`;

export {
  Root,
};
