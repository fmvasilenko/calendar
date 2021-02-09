import { useDispatch, useSelector } from 'react-redux';

import { saveForm } from '../../../../core/formStatus/actions';
import { ReduxStore } from '../../../../core/rootReducer';
import { setTable } from '../../../../core/table/actions';
import Button from '../../../../shared/view/components/Button/Button';

import { Root, SubmitButton, Loading, Saved } from './SubmitArea.style';

const tableProps = {
  days: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница'],
  hours: ['11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00']
}

const SubmitArea = (): JSX.Element => {
  const { days, hours } = tableProps;
  const dispatch = useDispatch();
  const { formStatus } = useSelector((state: ReduxStore) => state);

  const clearTable = () => {
    dispatch(setTable(days.map(() => hours.map(() => 'free'))));
  }

  const sendForm = () => {
    dispatch(saveForm());
  }

  const submitButton = () => {
    switch (formStatus) {
      case 'SAVING': return <Button view="loading" label="Сохраняем..." />;
      case 'SAVED': return <Button view="resolve" label="Сохранено" onClick={sendForm} />;
      default: return <Button view="resolve" label="Сохранить" onClick={sendForm}/>;
    }
  }

  return (
    <Root>
      <Button view="reject" label="Очистить" onClick={clearTable} />
      <SubmitButton>
        { formStatus === 'SAVING' && <Loading /> }
        { formStatus === 'SAVED' && <Saved /> }
        { submitButton() }
      </SubmitButton>
    </Root>
  );
};

export default SubmitArea;
