import styled from 'styled-components';

const Root = styled.div`
  grid-area: eventDetails;
  width: 100%;
`;

const Title = styled.h1`
  color: #333;
  margin: 20px 0;
  // margin-left: 150px;
`;

const InputArea = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 20px;
`;

const Label = styled.p`
  width: 260px;
  font-size: 18px;
  color: #333;
`;

export {
  Root,
  Title,
  InputArea,
  Label,
};
