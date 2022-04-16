import styled from "styled-components";

export const VideoWrapper = styled.div`
  max-height: 36rem;

  @media (min-width: 640px) {
    height: 36rem;
  }
`;

export const VideoLayer = styled.video`
  display: block;
  object-fit: cover;
  max-width: 100%;
`;