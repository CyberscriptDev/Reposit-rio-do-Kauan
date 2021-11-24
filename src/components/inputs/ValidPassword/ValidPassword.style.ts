import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';
import styled from 'styled-components';

export const ValidField = styled.label`
  padding: 0.8rem;
  margin: 0px;
  width: 20rem;
  display: flex;
  border-radius: 0.3rem;
  border: 0.1rem solid #06d6a0;
`;

export const ValidPasswordIcon = styled(RiLockPasswordLine)`
  color: #06d6a0;
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

export const ValidInvisiblePasswordIcon = styled(AiFillEyeInvisible)`
  color: #06d6a0;
  margin-left: 0.5rem;
  cursor: pointer;
`;

export const ValidVisiblePasswordIcon = styled(AiFillEye)`
  color: #06d6a0;
  margin-left: 0.5rem;
  cursor: pointer;
`;