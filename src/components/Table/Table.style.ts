import styled from 'styled-components';

const Hour = styled.th`
  height: 50px;
  font-size: 15px;
  color: #333;
  border-radius: 5px 5px 0 0;
  background: #eee;
`;

const Day = styled.th`
  width: 120px;
  height: 50px;
  font-size: 15px;
  text-align: left;
  text-transform: capitalize;
  color: #333;
  padding-left: 10px;
  border-radius: 5px 0 0 5px;
  background: #eee;
`;

export {
  Hour,
  Day,
};
