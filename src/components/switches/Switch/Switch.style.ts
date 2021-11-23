import styled from 'styled-components';

interface Props {
  isChecked: boolean
}

export const SwitchField = styled.div`
  transition: background-color 1s linear;
  padding: 10px 0;
  width: 100px;
`;

export const SwitchInput = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;
`;

export const SwitchControl = styled.label<Props>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 80px;
  height: 40px;
  border-radius: 100px;
  border: 1px solid ${({ color, isChecked }) => isChecked ? color : '#e6e6e6'};
  background-color: ${({ color, isChecked }) => isChecked ? color : '#fff'};
  box-shadow: 0 2px 2px rgb(0 0 0 / 24%);
  position: relative;
  transition: background-color 0.2s;

  &:hover {
    box-shadow: 0 0 5px ${({ color, isChecked }) => isChecked ? color : '#e6e6e6'};
  }
`;

export const SwitchButton = styled.span`
  content: "";
  position: absolute;
  top: 2px;
  left: 2px;
  width: 36px;
  height: 36px;
  border-radius: 45px;
  transition: 0.2s;
  background: #fff;
  box-shadow: 0 2px 2px rgb(0 0 0 / 24%);
  ${SwitchInput}:checked + ${SwitchControl} & {
    left: calc(100% - 2px);
    transform: translateX(-100%);
  }

  ${SwitchControl}:active & {
    width: 45px;
  }
`;