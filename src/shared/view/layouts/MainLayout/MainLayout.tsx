import Header from '../../components/Header/Header';
import Props from './MainLayout.types';
import { Page, Content } from './MainLayout.style';

const MainLayout = (props: Props) => {
  const { children } = props;

  return (
    <>
      <Header />
      <Content>
        {children}
      </Content>
    </>
  );
};

export default MainLayout;
