import styled from 'styled-components';

const Page = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: max-content 580px;
  grid-template-areas:
    ". header"
    "eventDetails eventDetails";
  grid-column-gap: 0px;
  grid-row-gap: 10px;
  padding-bottom: 50px;
`;

const Title = styled.h1`
  grid-column: 2;
  color: #333;
  margin: 20px 0;
`;

const Label = styled.p`
  grid-column: 1;
  width: 100%;
  height: 50px;
  padding-left: 15px;
  padding-right: 25px;
  line-height: 50px;
  font-size: 18px;
  color: #333;
  background: #eee;
  border-radius: 5px 0 0 5px;
`;

const InputWrapper = styled.div`
  grid-column: 2;
  margin-left: -10px;
  background: white;
`;

const InputDescription = styled.p`
  margin-top: 5px;
  color: #888;
`;

export {
  Page,
  Title,
  Label,
  InputWrapper,
  InputDescription,
}
