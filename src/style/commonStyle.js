import styled from "styled-components";

export const Button = styled.div`
  padding: 1rem;
  border: none;
  background: no-repeat center/90%;
  transition: all 300ms ease-in;
  cursor: pointer;

  &:hover {
    opacity: .7;
  }

  &:active {
    opacity: .4;
  }
`;