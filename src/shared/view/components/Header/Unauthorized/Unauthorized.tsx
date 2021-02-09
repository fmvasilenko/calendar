import { useDispatch } from 'react-redux';

import { signIn as signInAction } from '../../../../../core/user/actions';
import Button from '../../Button/Button';
import Warning from '../../Warning/Warning';

import { Content, Root, LogIn, PopupMessage } from "./Unauthorized.style";

const Unauthorized = () => {
  const dispatch = useDispatch();
  const signIn = () => dispatch(signInAction());

  return (
    <Root>
      <Content>
        <LogIn>
          <Button view="resolve" label="Войти" onClick={signIn}/>
        </LogIn>
      </Content>

      <PopupMessage>
        <Warning title="Внимание! Для дальнейших действий требуется авторизация!" description="Отправка данных доступна только авторизованным пользователям" />
      </PopupMessage>
    </Root>
  );
}

export default Unauthorized;
