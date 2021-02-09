import { Props } from './Button.types';
import { Root } from './Button.style';
import Patterns from './Button.patterns';

const Button = (props: Props): JSX.Element => {
  const {
    label,
    view,
    type = 'button',
    onClick = () => {},
  } = props;

  const { color, border, background } = typeof view === 'string' ? Patterns[view] : view;

  return (
    <Root
      type={type}
      color={color}
      border = {border}
      background = {background}
      onClick={onClick}
    >{label}</Root>
  );
}

export default Button;
