import {getProgressWidth} from "../../services/services";
import styled from "styled-components";

export const Progress = styled.div`
  height: .7rem;
  background-color: darkgrey;
  margin: 0;
  padding: 0;
  cursor: pointer;
`;

export const ProgressLine = styled.div`
  height: 100%;
  background-color: red;
  width: ${({currentTime, duration}) => getProgressWidth(currentTime, duration) + '%'};
  transition: all 700ms linear;
`;