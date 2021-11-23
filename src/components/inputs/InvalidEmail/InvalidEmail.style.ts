import { AiOutlineMail } from 'react-icons/ai';
import styled from 'styled-components';

export const InvalidField = styled.label`
  padding: 0.8rem;
  margin: 0px;
  width: 20rem;
  display: flex;
  border-radius: 0.3rem;
  border: 0.1rem solid #e62965;
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

export const InvalidEmailIcon = styled(AiOutlineMail)`
  color: #e62965;
  margin-right: 0.5rem;
`;
