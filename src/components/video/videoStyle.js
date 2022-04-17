import styled from "styled-components";
import playIcon from '../../img/icon/playIcon.svg';

export const VideoWrapper = styled.div`
  position: relative;
  max-height: 36rem;
  cursor: pointer;

  @media (min-width: 640px) {
    height: 36rem;
  }
`;

export const VideoLayer = styled.video`
  display: block;
  object-fit: cover;
  max-width: 100%;
  background-color: #00c7db;
`;

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(50, 50, 50, 0.7);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 10%;
  background-image: url(${playIcon});
`;