import { Props } from './Button.types';
import { Root } from './Button.style';

const Button = (props: Props): JSX.Element => {
  const {
    label,
    color = 'grey',
    type = 'button',
    onClick = () => {},
  } = props;
  console.log(color);
  return <Root type={type} color={color} onClick={onClick}>{label}</Root>
}

export default Button;
