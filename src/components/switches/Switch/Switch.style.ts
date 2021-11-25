import styled, { css } from 'styled-components';

interface Props {
  isChecked: boolean;
  color?: string;
  sliderWidth?: number;
}

export const SwitchField = styled.div`
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  clear: both;
  font-size: 1rem;
  position: relative;
  text-align: inherit;
`;

export const SwitchControl = styled.label<Props>`
  position: relative;
  display: inline-block;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  i::before {
  content: "";
  position: absolute;
  left: 0;
  width: ${({ sliderWidth }) => sliderWidth ? `${sliderWidth - 4}px` : '42px'};
  height: 22px;
  background-color: ${({ color, isChecked }) => isChecked && color ? color : '#fff'};
  border-radius: 11px;
  -webkit-transform: translate3d(2px, 2px, 0) scale3d(1, 1, 1);
  transform: translate3d(2px, 2px, 0) scale3d(1, 1, 1);
  -webkit-transition: all .25s linear;
  transition: all .25s linear;
  }

  i::after {
  content: "";
  position: absolute;
  left: 0;
  width: 22px;
  height: 22px;

  background-color: #fff;
  border-radius: 11px;
  -webkit-box-shadow: 0 2px 2px rgb(0 0 0 / 24%);
  box-shadow: 0 2px 2px rgb(0 0 0 / 24%);

  -webkit-transform: translate3d(2px, 2px, 0);
  transform: translate3d(2px, 2px, 0);
  -webkit-transition: all .2s ease-in-out;
  transition: all .2s ease-in-out;
  ${({ isChecked }) => !!isChecked && css`
  left: calc(100% - 26px);
  `}
  }
`;

export const SwitchInput = styled.input`
  position: absolute;
  opacity: 0;
  pointer-events: none;
`;

export const SwitchButton = styled.i<Props>`
  position: relative;
  display: inline-block;
  width: ${({ sliderWidth }) => sliderWidth ? `${sliderWidth}px` : '46px'};
  height: 26px;
  background-color: ${({ color, isChecked }) => isChecked && color ? color : '#e6e6e6'};
  border-radius: 23px;
  vertical-align: text-bottom;
  -webkit-transition: all .3s linear;
  transition: all .3s linear;

  &:hover {
    box-shadow: 0 0 0.3rem ${({ color, isChecked }) => isChecked && color ? color : '#e6e6e6'};
  }
`;