import styled from 'styled-components';
import getColor from '../../shared/helpers/getColor';

const Root = styled.div`
  display: grid;
  grid-template-columns: auto 800px auto;
  grid-template-rows: max-content max-content max-content;
  grid-template-areas:
    ". header ."
    ". title ."
    ". description .";
  grid-column-gap: 50px;
  grid-row-gap: 10px;
  padding-bottom: 50px;
`;

const Title = styled.h1`
  grid-area: title;
  padding-left: 121px;
  font-size: 100px;
  color: ${getColor('pink')};
`;

const Description = styled.p`
  grid-area: description;
  padding-left: 121px;
  font-size: 20px;
  color: ${getColor('red')};
`;

export {
  Root,
  Title,
  Description,
};
