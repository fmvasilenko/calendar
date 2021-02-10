import styled, { keyframes } from 'styled-components';
import getColor from '../../../../shared/helpers/getColor';

const Root = styled.div`
  grid-area: submitArea;
  margin-top: 40px;
`;

const SubmitButton = styled.div`
  display: flex;
  margin-top: 5px;
`;

const LoadingKeyframes = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 50px;
  height: 50px;
  margin-right: 5px;
  border-radius: 5px;
  background: ${getColor('blue')};

  &:after {
  content: ' ';
  display: block;
  box-sizing: border-box;
  width: 80%;
  height: 80%;
  margin: 0px;
  border-radius: 50%;
  border: 5px solid white;
  border-color: white transparent white transparent;
  animation: ${LoadingKeyframes} 1.2s linear infinite;
  }
`;

const Saved = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  min-width: 50px;
  height: 50px;
  padding-top: 5px;
  margin-right: 5px;
  border-radius: 5px;
  background: ${getColor('green')};

  ::before {
    position: absolute;
    top: 25px;
    left: 20px;
    height: 15px;
    width: 5px;
    background-color: white;
    content: '';
    transform: rotate(-45deg);
    transform-origin: left bottom;
  }

  &::after {
    position: absolute;
    left: 20px;
    top: 35px;
    height: 5px;
    width: 30px;
    background-color: white;
    content: '';
    transform: rotate(-45deg);
    transform-origin: left bottom;
  }
`;

export {
  Root,
  SubmitButton,
  Loading,
  Saved,
}