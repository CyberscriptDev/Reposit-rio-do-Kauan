import styled from 'styled-components';

interface Props {
  isChecked: boolean
}

export const SwitchField = styled.div`
  transition: background-color 1s linear;
  margin: 5px 0 5px 0;
  width: 100px;
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

export const SwitchInput = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;
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

export const SwitchBlock = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0 5px 0;
  width: 300px;
  height: 42px;
`;

export const SwitchOption = styled.span`
  position: relative;
  top: 8px;
  right: 7px;
  display: block;
  color: #a2a5b9;
  font-size: 1em;
`;

export const SwitchThinBlock = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0 5px 0;
  width: 300px;
  height: 42px;
`;

export const SwitchThinOption = styled.span`
  position: relative;
  top: 8px;
  right: 22px;
  display: block;
  color: #a2a5b9;
  font-size: 1em;
`;
