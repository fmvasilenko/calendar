import { useDispatch, useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { ReduxStore } from './core/rootReducer';
import { checkUser } from './core/user/actions';
import Main from './pages/Main';
import Table from './pages/Table/Table';

const App = (): JSX.Element => {
  const user = useSelector((store: ReduxStore) => store.user);
  const dispatch = useDispatch();
  
  if (user.status === 'INITIAL') dispatch(checkUser());

  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route exact path='/table' component={Table} />
      </Switch>
    </Router>
  );
}

export default App;
