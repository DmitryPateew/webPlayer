import {Button} from "../../style/commonStyle";
import styled from "styled-components";
import playIcon from '../../img/icon/playIcon.svg';
import pauseIcon from '../../img/icon/pauseIcon.svg';

export const Play = styled(Button)`
  background-image: url(${({play}) => play ? pauseIcon : playIcon});
`;