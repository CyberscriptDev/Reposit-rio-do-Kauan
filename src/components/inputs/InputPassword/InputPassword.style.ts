import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';
import styled from 'styled-components';

export const Field = styled.label`
  padding: 0.8rem;
  margin: 0px;
  width: 20rem;
  display: flex;
  border-radius: 0.3rem;
  border: 0.1rem solid #707174;
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

export const PasswordIcon = styled(RiLockPasswordLine)`
  color: #707174;
  margin-right: 0.5rem;
`;

export const VisiblePasswordIcon = styled(AiFillEye)`
  color: #707174;
  margin-left: 0.5rem;
  cursor: pointer;
`;

export const InvisiblePasswordIcon = styled(AiFillEyeInvisible)`
  color: #707174;
  margin-left: 0.5rem;
  cursor: pointer;
`;
