import { Props } from './Button.types';
import { Root } from './Button.style';

const Button = (props: Props): JSX.Element => {
  const {
    label,
    color = 'black',
    border,
    background = 'grey',
    type = 'button',
    onClick = () => {},
  } = props;
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
