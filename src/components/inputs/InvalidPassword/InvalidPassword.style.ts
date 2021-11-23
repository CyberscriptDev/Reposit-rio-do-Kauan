import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';
import styled from 'styled-components';

export const InvalidField = styled.label`
  padding: 0.8rem;
  margin: 0px;
  width: 20rem;
  display: flex;
  border-radius: 0.3rem;
  border: 0.1rem solid #e62965;
`;

export const InvalidPasswordIcon = styled(RiLockPasswordLine)`
  color: #e62965;
  margin-right: 0.5rem;
`;

export const Input = styled.input`
  border: none;
  width: 100%;
  &:focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
  }
`;

export const InvalidInvisiblePasswordIcon = styled(AiFillEyeInvisible)`
  color: #e62965;
  margin-left: 0.5rem;
  cursor: pointer;
`;

export const InvalidVisiblePasswordIcon = styled(AiFillEye)`
  color: #e62965;
  margin-left: 0.5rem;
  cursor: pointer;
`;
