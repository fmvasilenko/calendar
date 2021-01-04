import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Main from './pages/Main';
import Table from './pages/Table/Table';

function App() {
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
