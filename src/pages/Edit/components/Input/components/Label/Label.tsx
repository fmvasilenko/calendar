import getStyle from './helpers/getStyle';
import { Root } from './Label.style';
import { Props } from './Label.types';

const Label = (props: Props): JSX.Element => {
  const { label, view } = props;

  return <Root { ...getStyle(view)} >{ label }</Root>;
}

export default Label;
