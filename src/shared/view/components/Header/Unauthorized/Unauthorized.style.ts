import styled from 'styled-components';

const Root = styled.header`
  grid-area: header;
  width: 100%;
  padding-left: 121px;
`;

const Content = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
`;

const LogIn = styled.div`
  width: 120px;
`;

const PopupMessage = styled.div`
  width: 100%;
  margin-top: 10px;
`;

export {
  Root,
  Content,
  LogIn,
  PopupMessage,
}