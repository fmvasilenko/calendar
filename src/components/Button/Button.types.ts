import { Color } from '../../types/Color.types';

interface Props {
  label: string
  color?: Color,
  type?: 'submit' | 'button'
}

interface StyleProps {
  color: Color,
}

export type {
  Props,
  StyleProps,
};
