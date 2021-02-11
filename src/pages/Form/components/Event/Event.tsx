import { useSelector } from 'react-redux';
import { ReduxStore } from '../../../../core/rootReducer';
import { Root, Title, Description } from './Event.style';

const Event = (): JSX.Element => {
  const { name, description } = useSelector((state: ReduxStore) => state.event);

  return (
    <Root>
      <Title>{ name }</Title>
      <Description>{ description }</Description>
    </Root>
  );
};

export default Event;
