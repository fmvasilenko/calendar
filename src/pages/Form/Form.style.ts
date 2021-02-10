import styled from 'styled-components';
import { StyleProps } from './Form.types';

const Page = styled.div<StyleProps>`
  display: grid;
  grid-template-columns: auto ${(props: StyleProps) => `${props.tableWidth}px`} 280px auto;
  grid-template-rows: max-content max-content max-content;
  grid-template-areas:
    ". header header ."
    ". description description ."
    ". table toolsPanel ."
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

export {
  Page,
  Header,
  Description,
  Title,
  Text,
}
