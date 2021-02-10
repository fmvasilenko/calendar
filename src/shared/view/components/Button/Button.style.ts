import styled from 'styled-components';
import getColor from '../../../helpers/getColor';
import { StyleProps } from './Button.types';

const Root = styled.button<StyleProps>`
  width: 100%;
  height: 50px;
  font-size: 16px;
  font-weight: bold;
  color: ${(props: StyleProps) => getColor(props.color)};
  background: ${(props: StyleProps) => getColor(props.background)};
  border-radius: 5px;
  cursor: pointer;

  border: ${(props: StyleProps) => props.border ? `2px solid ${getColor(props.border)}` : 'none'};

  &:hover {
    opacity: 0.5;
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`;

export {
  Root,
};
