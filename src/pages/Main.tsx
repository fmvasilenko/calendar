import ToolsPanel from '../shared/view/components/ToolsPanel/ToolsPanel';
import { storage } from '../shared/services/DB/DB';

/*
storage.saveTable('event', [['free', 'busy', 'preferred'], ['undesirable', 'free', 'busy']])
  .then(() => console.log('success'))
  .catch((error) => console.log(error));
*/

const Main = (): JSX.Element => {
  return (
    <>
      <h1>Main</h1>
      <ToolsPanel />
    </>
  )
};

export default Main;
