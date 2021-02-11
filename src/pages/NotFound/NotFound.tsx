import Header from '../../shared/view/components/Header/Header';
import { Root, Title, Description } from './NotFound.style';

const NotFound = (): JSX.Element => {
  return (
    <Root>
      <Header />
      <Title>404</Title>
      <Description>К сожалению, указанная Вами страница не существует :(</Description>
    </Root>
  );
};

export default NotFound;
