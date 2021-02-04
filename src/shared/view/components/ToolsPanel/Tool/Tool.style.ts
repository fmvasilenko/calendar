import styled from 'styled-components';
import getMomentStatusColor from '../../../../helpers/getMomentStatusColor';
import { StyleProps } from './Tool.types';

const Label = styled.label`
  display: flex;
  width: 100%;
  margin-top: 5px;
  cursor: pointer;
`;

const ColorBox = styled.span`
  display: block;
  min-width: 50px;
  height: 50px;
  background: ${(props: StyleProps) => getMomentStatusColor(props.toolType)};
  border-radius: 5px 0 0 5px;
  z-index: 1;
  transition-property: min-width;
  transition-duration: 0.1s;
  transition-timing-function: ease-in;
`;

const Text = styled.span`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 0 15px;
  background: #eee;
  border-radius: 0 5px 5px 0;
`;

const Input = styled.input<StyleProps>`
  display: none;

  &:checked ~ ${ColorBox} {
    min-width: 60px;
  }

  &:checked ~ ${Text} {
    border-top: 1px solid;
    border-right: 1px solid;
    border-bottom: 1px solid;
    border-color: ${(props: StyleProps) => getMomentStatusColor(props.toolType)};
  }
`;

export {
  Label,
  Input,
  Text,
  ColorBox,
};
