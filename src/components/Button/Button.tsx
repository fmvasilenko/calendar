import { Props } from './Button.types';
import { Root } from './Button.style';

const Button = (props: Props): JSX.Element => {
  const {
    label,
    color = 'grey',
    type = 'button'
  } = props;
  console.log(color);
  return <Root type={type} color={color}>{label}</Root>
}

export default Button;
