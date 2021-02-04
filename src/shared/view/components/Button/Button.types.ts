import { Color } from '../../../types/Color.types';

interface Props {
  label: string
  color?: Color,
  type?: 'submit' | 'button'
  onClick?: () => void
}

interface StyleProps {
  color: Color,
}

export type {
  Props,
  StyleProps,
};
