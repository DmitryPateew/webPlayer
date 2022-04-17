import {getProcent} from "../../services/services";
import {ONE_HUNDRED_PROCENT_NUMBER} from "../../constant/constant";
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
  width: ${({currentTime, duration}) => `${getProcent(duration, currentTime) * ONE_HUNDRED_PROCENT_NUMBER}%`};
  transition: all 700ms linear;
`;