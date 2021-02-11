import { useDispatch, useSelector } from 'react-redux';
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { ReduxStore } from './core/rootReducer';
import { checkUser } from './core/user/actions';
import Main from './pages/Main';
import Form from './pages/Form/Form';
import NotFound from './pages/NotFound/NotFound';

const App = (): JSX.Element => {
  const user = useSelector((store: ReduxStore) => store.user);
  const dispatch = useDispatch();
  
  if (user.status === 'INITIAL') dispatch(checkUser());

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/form/:eventId" component={Form} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
