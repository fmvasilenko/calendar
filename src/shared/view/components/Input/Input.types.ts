import { FocusEvent } from 'react';
import { Color } from '../../../types/Color.types';

type View = 'default' | 'resolved' | 'rejected' | 'focused';
type Shape = 'withBorderRadius' | 'borderRadiusLeft' | 'borderRadiusRight';

interface Props {
  view?: View
  shape?: Shape
  placeholder?: string
  disabled?: boolean
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void
  onMouseEnter?: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void
  onMouseLeave?: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void
}

interface StyleProps {
  color: Color
  border?: Color
  borderRadius?: string
}

interface ViewConfig {
  color: Color
  border?: Color
}

interface ShapeConfig {
  borderRadius?: string
}

export type {
  View,
  Shape,
  Props,
  StyleProps,
  ViewConfig,
  ShapeConfig,
};
