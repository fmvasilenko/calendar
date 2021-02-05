import { useDispatch } from 'react-redux';

import { signOut as signOutAction } from '../../../../../core/user/actions';
import Button from '../../Button/Button';

import { Root, Content, UserInfo, UserPhoto, UserName, LogOut } from './Authorized.style'
import { Props } from './Authorized.types';

const Authorized = (props: Props) => {
  const { name, lastName, photo } = props.user;
  const dispatch = useDispatch();

  const signOut = () => dispatch(signOutAction());

  return (
    <Root>
      <Content>
        <UserInfo>
          <UserPhoto src={photo} />
          <UserName>{`${name} ${lastName}`}</UserName>
        </UserInfo>

        <LogOut>
          <Button color="red" label="Выйти" onClick={signOut}/>
        </LogOut>
      </Content>
    </Root>
  );
}

export default Authorized;
