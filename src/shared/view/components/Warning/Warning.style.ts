import styled from 'styled-components';
import getColor from '../../../helpers/getColor';

const Root = styled.div`
  position: relative;
  width: 100%;
  padding: 20px;
  color: ${getColor('red')};
  border: 1px solid ${getColor('red')};
  border-radius: 5px;
  background: ${getColor('pink')};
`;

const Title = styled.p`
  width: 100%;
  font-size: 18px;
  font-weight: bold;
`;

const Description = styled.p`
  width: 100%;
  margin-top: 10px;
`;

const Close = styled.button`
  position: absolute;
  right: 5px;
  top: 5px;
  width: 20px;
  height: 20px;
  font-size: 20px;
  line-height: 20px;
  opacity: 0.3;
  border: 0;
  background: none;
  cursor: pointer;
`;

export {
  Root,
  Title,
  Description,
  Close,
};
