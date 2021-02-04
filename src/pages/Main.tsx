import ToolsPanel from '../shared/view/components/ToolsPanel/ToolsPanel';
import Button from '../shared/view/components/Button/Button';
import { auth } from '../shared/services/DB/DB';

const signIn = () => {
  auth.signIn()
  .then((user) => console.log(user));
}

const signOut = () => {
  auth.signOut()
    .then(() => console.log('SignedOut'));
}

auth.getUser()
  .then((user) => console.log(user))
  .catch((error) => console.log(error));

const Main = (): JSX.Element => {
  return (
    <>
      <h1>Main</h1>
      <ToolsPanel />
      <Button label="Войти" onClick={signIn} />
      <Button label="Выйти" onClick={signOut} />
    </>
  )
};

export default Main;
