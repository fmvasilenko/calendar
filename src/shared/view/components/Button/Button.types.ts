import { Color } from '../../../types/Color.types';

interface Props {
  label: string
  color?: Color,
  border?: Color,
  background?: Color,
  type?: 'submit' | 'button'
  onClick?: () => void
}

interface StyleProps {
  color: Color,
  border?: Color,
  background: Color,
}

export type {
  Props,
  StyleProps,
};
