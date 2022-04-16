import styled from "styled-components";
import soundOff from "../../img/icon/soundOff.svg";
import soundFull from "../../img/icon/soundFull.svg";
import {Button} from "../../style/commonStyle";

export const SoundWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const SoundButton = styled(Button)`
  background-image: url(${({soundValue}) => soundValue
          ? soundFull
          : soundOff
  });
`;

export const Range = styled.input`
  margin-right: 1rem;
  max-width: 5rem;
  -webkit-appearance: none;

  &:focus {
    outline: none;
  }

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: .5rem;
    cursor: pointer;
    border: 1px solid #8A8A8A;
  }

  &::-webkit-slider-thumb {
    height: 1rem;
    width: 0.4rem;
    background-color: white;
    border: 1px solid #8A8A8A;
    border-radius: 0.2rem;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -0.4rem;
  }

  &::-webkit-slider-runnable-track {
    background: white;
  }

  &::-moz-range-track {
    width: 100%;
    height: .5rem;
    cursor: pointer;
    border: 1rem solid #5E5C5C;
  }

  &::-moz-range-thumb {
    height: 1rem;
    width: 0.4rem;
    border: 1px solid #8A8A8A;
    border-radius: 0.2rem;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -0.4rem;
  }
`;