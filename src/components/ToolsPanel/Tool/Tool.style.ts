import styled from 'styled-components';
import { StyleProps } from './Tool.types';

const Label = styled.label`
  display: flex;
  width: 100%;
  margin-top: 5px;
`;

const ColorBox = styled.span`
  display: block;
  min-width: 50px;
  height: 50px;
  background: ${(props: StyleProps) => props.toolType === 'active' ? 'green' : 'blue'};
  border-radius: 5px 0 0 5px;
`;

const Text = styled.span`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 0 15px;
  background: #eee;
  cursor: pointer;
  border-radius: 0 5px 5px 0;
`;

const Input = styled.input<StyleProps>`
  display: none;

  &:checked ~ ${ColorBox} {
    box-shadow: 1px 1px 5px rgba(1, 1, 1, 0.5);
  }

  &:checked ~ ${Text} {
    border-top: 1px solid;
    border-right: 1px solid;
    border-bottom: 1px solid;
    border-color: ${(props: StyleProps) => props.toolType === 'active' ? 'green' : 'blue'};
    box-shadow: 1px 1px 5px rgba(1, 1, 1, 0.3);
  }
`;

export {
  Label,
  Input,
  Text,
  ColorBox,
};
