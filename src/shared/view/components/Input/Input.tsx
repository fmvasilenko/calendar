import getShape from './helpers/getShape';
import getStyle from './helpers/getStyle';
import { Root } from './Input.style';
import { Props } from './Input.types';

const Input = (props: Props): JSX.Element => {
  const {
    view,
    shape,
    placeholder,
    disabled = false,
    onFocus,
    onBlur,
    onMouseEnter,
    onMouseLeave,
  } = props;

  return <Root
    { ...getStyle(view) }
    { ...getShape(shape) }
    placeholder={placeholder}
    disabled={disabled}
    onFocus={onFocus}
    onBlur={onBlur}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  />;
}

export default Input;
