import { useSelector } from 'react-redux';
import { ReduxStore } from '../../../../core/rootReducer';
import Authorized from './Authorized/Authorized';
import Unauthorized from './Unauthorized/Unauthorized';

const Header = () => {
  const { status, details } = useSelector((store: ReduxStore) => store.user);

  if (status === 'AUTHORIZED' && details) return <Authorized user={details} />
  return <Unauthorized />
};

export default Header;
