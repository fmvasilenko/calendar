import styled from 'styled-components';

const Page = styled.div`
  display: grid;
  grid-template-columns: auto max-content 280px auto;
  grid-template-rows: max-content max-content max-content;
  grid-template-areas:
    ". header header ."
    ". content sidebar ."
    ". . submitArea .";
  grid-column-gap: 50px;
  grid-row-gap: 50px;
  padding: 50px 0;
`;

const Header = styled.div`
  grid-area: header;
`;

const Title = styled.h1`
  max-width: 800px;
  padding-left: 121px;
  color: #333;
`;

const Description = styled.p`
  max-width: 800px;
  padding-left: 121px;
  margin-top: 10px;
  color: #333;
`;

const Content = styled.div`
  grid-area: content;
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
`;

const SubmitButton = styled.div`
  margin-top: 5px;
`;

export {
  Page,
  Header,
  Title,
  Description,
  Content,
  TableTitle,
  Sidebar,
  SubmitArea,
  SubmitButton,
}
