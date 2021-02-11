import styled from 'styled-components';
import { StyleProps } from './Form.types';

const Page = styled.div<StyleProps>`
  display: grid;
  grid-template-columns: auto ${(props: StyleProps) => `${props.tableWidth}px`} 280px auto;
  grid-template-rows: max-content max-content max-content;
  grid-template-areas:
    ". header header ."
    ". event event ."
    ". table toolsPanel ."
    ". . submitArea .";
  grid-column-gap: 50px;
  grid-row-gap: 10px;
  padding-bottom: 50px;
`;

export {
  Page,
}
