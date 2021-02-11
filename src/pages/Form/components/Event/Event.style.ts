import styled from 'styled-components';

const Root = styled.div`
  grid-area: event;
  padding-left: 121px;
`;

const Title = styled.h1`
  color: #333;
`;

const Description = styled.p`
  margin-top: 10px;
  color: #333;
  padding-bottom: 30px;
  border-bottom: 1px solid #eee;
`;

export {
  Root,
  Title,
  Description,
};
