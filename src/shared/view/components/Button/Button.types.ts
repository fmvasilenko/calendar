import { Color } from '../../../types/Color.types';

interface Props {
  label: string
  view: StyleProps | PatternNames;
  type?: 'submit' | 'button'
  onClick?: () => void
}

interface StyleProps {
  color: Color,
  border?: Color,
  background: Color,
}

type StylePatterns = {
  [key in PatternNames]: StyleProps;
};

type PatternNames = 'resolve' | 'reject';

export type {
  Props,
  StyleProps,
  StylePatterns,
};
