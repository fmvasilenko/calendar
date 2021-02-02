import { useDispatch } from 'react-redux';
import ToolsPanel from '../components/ToolsPanel/ToolsPanel';
import { setTool } from '../core/tool/actions';

const Main = (): JSX.Element => {
  const dispatch = useDispatch();

  dispatch(setTool('disabled'));

  return (
    <>
      <h1>Main</h1>
      <ToolsPanel />
    </>
  )
};

export default Main;
