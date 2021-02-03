import Button from '../Button/Button';
import Warning from '../Warning/Warning';
import { Root, Content, UserInfo, UserName, UserPhoto, LogOut, PopupMessage } from './Header.style';

const Header = () => {
  return (
    <Root>
      <Content>
        <UserInfo>
          <UserPhoto src="https://i.pinimg.com/736x/f8/ac/ff/f8acff9fbc09674836f8262eab2cce1b.jpg" />
          <UserName>Федор Василенко</UserName>
        </UserInfo>
        <LogOut>
          <Button color="red" label="Выйти" />
        </LogOut>
      </Content>
      <PopupMessage>
        <Warning title="Внимание! Для дальнейших действий требуется авторизация!" description="Отправка данных доступна только авторизованным пользователям" />
      </PopupMessage>
    </Root>
  );
};

export default Header;
