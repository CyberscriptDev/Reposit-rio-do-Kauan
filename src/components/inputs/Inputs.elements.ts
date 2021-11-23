import { AiFillEye, AiFillEyeInvisible, AiOutlineLoading, AiOutlineMail } from 'react-icons/ai';
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

export const Fieldset = styled.fieldset`
  padding: 0.8rem;
  margin: 0px;
  width: 20rem;
  display: flex;
  border-radius: 0.3rem;
  border: 0.1rem solid #707174;
`;

export const EmailIcon = styled(AiOutlineMail)`
  color: #707174;
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

export const ValidField = styled.label`
  padding: 0.8rem;
  margin: 0px;
  width: 20rem;
  display: flex;
  border-radius: 0.3rem;
  border: 0.1rem solid #06d6a0;
`;

export const InvalidField = styled.label`
  padding: 0.8rem;
  margin: 0px;
  width: 20rem;
  display: flex;
  border-radius: 0.3rem;
  border: 0.1rem solid #e62965;
`;

export const ValidEmailIcon = styled(AiOutlineMail)`
  color: #06d6a0;
  margin-right: 0.5rem;
`;

export const InvalidEmailIcon = styled(AiOutlineMail)`
  color: #e62965;
  margin-right: 0.5rem;
`;

export const ValidPasswordIcon = styled(RiLockPasswordLine)`
  color: #06d6a0;
  margin-right: 0.5rem;
`;

export const InvalidPasswordIcon = styled(RiLockPasswordLine)`
  color: #e62965;
  margin-right: 0.5rem;
`;

export const ValidVisiblePasswordIcon = styled(AiFillEye)`
  color: #06d6a0;
  margin-left: 0.5rem;
  cursor: pointer;
`;

export const InvalidVisiblePasswordIcon = styled(AiFillEye)`
  color: #e62965;
  margin-left: 0.5rem;
  cursor: pointer;
`;

export const ValidInvisiblePasswordIcon = styled(AiFillEyeInvisible)`
  color: #06d6a0;
  margin-left: 0.5rem;
  cursor: pointer;
`;

export const InvalidInvisiblePasswordIcon = styled(AiFillEyeInvisible)`
  color: #e62965;
  margin-left: 0.5rem;
  cursor: pointer;
`;

export const LoadingIcon = styled(AiOutlineLoading)`
  animation: rotate 1s linear infinite;
  color: #707174;
  margin-left: 0.5rem;
  
  & .path {
    stroke: #5652BF;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }
  
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;

export const HelpField = styled.div`
  width: 21.8rem;

  p {
    margin: 0.3rem;
    color: #707174;
  }
`;




