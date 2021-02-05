import styled from 'styled-components';

const Root = styled.header`
  width: 100%;
  padding-left: 121px;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  margin-left: -65px;
`;

const UserPhoto = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 15px;
`;

const UserName = styled.div`
  font-size: 18px;
`;

const LogOut = styled.div`
  width: 120px;
`;

export {
  Root,
  Content,
  UserInfo,
  UserPhoto,
  UserName,
  LogOut,
}