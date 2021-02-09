import ToolsPanel from '../shared/view/components/ToolsPanel/ToolsPanel';
// import Storage from '../shared/services/DB/Databases/Firebase/Storage';

// const DB = new Storage();

/*
DB.saveTable('event', 'user', [['free', 'busy', 'preferred'], ['undesirable', 'free', 'busy']])
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
