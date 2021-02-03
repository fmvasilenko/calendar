import styled from 'styled-components';
import getColor from '../../helpers/getColor';
import { StyleProps } from './Button.types';

const Root = styled.button`
  width: 100%;
  height: 50px;
  font-size: 16px;
  font-weight: bold;
  color: ${(props: StyleProps) => (props.color === 'grey' || props.color === 'red' ? '#333' : 'white')};
  background: ${(props: StyleProps) => props.color === 'red'? 'none' : getColor(props.color)};
  border: ${(props: StyleProps) => props.color === 'red' ? `2px solid ${getColor('pink')}` : '0'};
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
`;

export {
  Root,
};
