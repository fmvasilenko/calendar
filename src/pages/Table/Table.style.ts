import styled from 'styled-components';

const Page = styled.div`
  display: grid;
  grid-template-columns: auto max-content 280px auto;
  grid-template-rows: max-content max-content max-content;
  grid-template-areas:
    ". header header ."
    ". description description ."
    ". content sidebar ."
    ". . submitArea .";
  grid-column-gap: 50px;
  grid-row-gap: 10px;
  padding-bottom: 50px;
`;

const Header = styled.div`
  grid-area: header;
  width: 100%;
`;

const Description = styled.div`
  grid-area: description;
  padding-left: 121px;
  max-width: 800px;
`;

const Title = styled.h1`
  color: #333;
`;

const Text = styled.p`
  margin-top: 10px;
  color: #333;
  padding-bottom: 30px;
  border-bottom: 1px solid #eee;
`;

const Content = styled.div`
  grid-area: content;
  margin-top: 20px;
`;

const TableTitle = styled.h2`
  max-width: 300px;
  margin-left: 122px;
  margin-bottom: 10px;
  color: #333;
`;

const Sidebar = styled.div`
  grid-area: sidebar;
  align-self: end;
`;

const SubmitArea = styled.div`
  grid-area: submitArea;
  margin-top: 40px;
`;

const SubmitButton = styled.div`
  margin-top: 5px;
`;

export {
  Page,
  Header,
  Description,
  Title,
  Text,
  Content,
  TableTitle,
  Sidebar,
  SubmitArea,
  SubmitButton,
}
