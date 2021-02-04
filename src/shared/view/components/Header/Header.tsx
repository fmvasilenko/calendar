import { useDispatch, useSelector } from 'react-redux';
import { ReduxStore } from '../../../../core/rootReducer';
import { signIn as signInAction, signOut as signOutAction } from '../../../../core/user/actions';
import Button from '../Button/Button';
import Warning from '../Warning/Warning';
import { Root, Content, UserInfo, UserName, UserPhoto, LogOut, PopupMessage, LogIn } from './Header.style';

const Header = () => {
  const dispatch = useDispatch();
  const userData = useSelector((store: ReduxStore) => store.user.details);

  const signIn = () => dispatch(signInAction());
  const signOut = () => dispatch(signOutAction());

  return (
    <Root>
      <Content>
        {
          userData && (
            <UserInfo>
              <UserPhoto src={userData.photo} />
              <UserName>{`${userData.name} ${userData.lastName}`}</UserName>
            </UserInfo>
          )
        }

        {
          userData && (
            <LogOut>
              <Button color="red" label="Выйти" onClick={signOut}/>
            </LogOut>
          )
        }

        {
          !userData && (
            <LogIn>
              <Button color="green" label="Войти" onClick={signIn}/>
            </LogIn>
          )
        }

      </Content>
      {
        !userData && (
          <PopupMessage>
            <Warning title="Внимание! Для дальнейших действий требуется авторизация!" description="Отправка данных доступна только авторизованным пользователям" />
          </PopupMessage>
        )
      }
    </Root>
  );
};

export default Header;
