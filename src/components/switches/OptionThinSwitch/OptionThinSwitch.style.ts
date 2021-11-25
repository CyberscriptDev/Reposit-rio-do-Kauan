import styled, { css } from 'styled-components';

interface Props {
  isChecked?: boolean;
  color?: string;
  sliderWidth?: number;
  optionColor?: string;
}

export const SwitchField = styled.div`
  display: flex;
  align-items: center;
  margin-left: 8px;
`;

export const SwitchThinInput = styled.input`
  display: none;
  height: 38px;
  -webkit-transition: all .3s;
  transition: all .3s;
`;

export const SwitchThinControl = styled.label<Props>`
  position: relative;
  display: inline-block;
  height: 8px;
  width: ${({ sliderWidth }) => sliderWidth ? `${sliderWidth}px` : '50px'};
  border-radius: 8px;
  cursor: pointer;
  background-color: ${({ color, isChecked }) => isChecked && color ? color : '#c5c5c5'};
  -webkit-transition: all .2s ease;
  transition: all .2s ease;
  
  &:hover {
    &::after {
      box-shadow: 0 0 0.3rem ${({ color, isChecked }) => isChecked && color ? color : '#eee'};
    }
  }

  &::after {
  background: #eee;
  position: absolute;
  left: -8px;
  top: -9px;
  display: block;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 1px solid transparent;
  background-color: ${({ color, isChecked }) => isChecked && color ? color : '#eee'};
  -webkit-box-shadow: 0px 2px 2px rgb(0 0 0 / 20%);
  box-shadow: 0px 2px 2px rgb(0 0 0 / 20%);
  content: "";
  -webkit-transition: all .2s ease;
  transition: all .2s ease;
  ${({ isChecked }) => !!isChecked && css`
  left: calc(100% - 18px);
  `}
  }
`;

export const OptionField = styled.div<Props>`
  margin-left: 12px;
  width: 100%;
  height: 100%;

  span {
    color: ${({ optionColor }) => optionColor ? optionColor : '#a2a5b9'};
  }
`;