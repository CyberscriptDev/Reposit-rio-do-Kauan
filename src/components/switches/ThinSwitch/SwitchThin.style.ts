import styled from 'styled-components';

interface Props {
  isChecked: boolean
}

export const SwitchField = styled.div`
  transition: background-color 1s linear;
  padding: 10px 0;
  width: 100px;
`;

export const SwitchThinInput = styled.input`
height: 0;
width: 0;
visibility: hidden;
`;

export const SwitchThinControl = styled.label<Props>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 52px;
  height: 8px;
  border-radius: 100px;
  border: 1px solid ${({ color, isChecked }) => isChecked ? color : '#e6e6e6'};
  background-color: ${({ color, isChecked }) => isChecked ? color : '#e6e6e6'};
  position: relative;
  transition: background-color 0.2s;
`;

export const SwitchThinButton = styled.span<Props>`
  content: "";
  position: absolute;
  top: -14px;
  right: 19px;
  display: block;
  width: 36px;
  height: 36px;
  border-radius: 45px;
  transition: 0.2s;
  background: ${({ color, isChecked }) => isChecked ? color : '#e6e6e6'};
  box-shadow: 0 2px 2px rgb(0 0 0 / 24%);
  ${SwitchThinInput}:checked + ${SwitchThinControl} & {
    right: calc(100% - 20px);
    transform: translateX(100%);
  }

  ${SwitchThinControl}:active & {
    width: 45px;
  }

  &:hover {
    box-shadow: 0 0 1em ${({ color, isChecked }) => isChecked ? color : '#e6e6e6'};
  }
`;