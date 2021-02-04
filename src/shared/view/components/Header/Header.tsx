import { useEffect, useState } from 'react';
import { auth } from '../../../services/DB/DB';
import User from '../../../types/User.types';
import Button from '../Button/Button';
import Warning from '../Warning/Warning';
import { Root, Content, UserInfo, UserName, UserPhoto, LogOut, PopupMessage, LogIn } from './Header.style';

const Header = () => {
  const [userData, setUserData] = useState<User | null>(null);

  useEffect(() => {
    auth.getUser()
      .then((user) => setUserData(user))
      .catch(() => setUserData(null));
  });

  const signIn = () => {
    auth.signIn()
      .then((user) => setUserData(user));
  }

  const signOut = () => {
    auth.signOut();
    setUserData(null);
  }

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
