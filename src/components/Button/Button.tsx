import { Props } from './Button.types';
import { Root } from './Button.style';

const Button = (props: Props): JSX.Element => {
  const {
    label,
    type = 'button'
  } = props;
  return <Root type={type}>{label}</Root>
}

export default Button;
