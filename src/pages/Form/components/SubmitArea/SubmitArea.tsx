import { useDispatch, useSelector } from 'react-redux';

import { changeForm, saveForm } from '../../../../core/form/actions';
import { ReduxStore } from '../../../../core/rootReducer';
import Button from '../../../../shared/view/components/Button/Button';

import { Root, SubmitButton, Loading, Saved } from './SubmitArea.style';

const SubmitArea = (): JSX.Element => {
  const dispatch = useDispatch();
  const { status } = useSelector((state: ReduxStore) => state.form);
  const { days, hours } = useSelector((state: ReduxStore) => state.event);

  const clearTable = () => {
    dispatch(changeForm(days.map(() => hours.map(() => 'free'))));
  }

  const sendForm = () => {
    dispatch(saveForm());
  }

  const submitButton = () => {
    switch (status) {
      case 'SAVING': return <Button view="loading" label="Сохраняем..." />;
      case 'SYNCHRONIZED': return <Button view="resolve" label="Сохранено" onClick={sendForm} disabled={true} />;
      default: return <Button view="resolve" label="Сохранить" onClick={sendForm}/>;
    }
  }

  return (
    <Root>
      <Button view="reject" label="Очистить" onClick={clearTable} />
      <SubmitButton>
        { status === 'SAVING' && <Loading /> }
        { status === 'SYNCHRONIZED' && <Saved /> }
        { submitButton() }
      </SubmitButton>
    </Root>
  );
};

export default SubmitArea;
