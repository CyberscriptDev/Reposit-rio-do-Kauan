import { IoIosArrowDown } from 'react-icons/io';
import styled, { css } from 'styled-components';

interface Props {
  open: boolean,
}

export const CollapseField = styled.div`
  padding: 0.8rem;
  margin: 0px;
  width: 26rem;
  display: flex;
  border-radius: 0.3rem;
  border: 0.1rem solid #a2a5b9;
  flex-wrap: wrap;
  -webkit-transition: all .2s ease-in-out;
  transition: all 0.4s ease-out;
`;

export const CollapseHeader = styled.div`
  display: flex;
  width: 100%;
  height: 1.50rem;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  h3 {
    font-weight: normal;
    color: #283252;
  }

`;

export const CollapseChevronDownIcon = styled(IoIosArrowDown)<Props>`
  color: #a2a5b9;
  transition: transform 300ms ease-in-out;
  transform: rotate(0deg);
  ${({ open }) => !!open && css`
    transform: rotate(180deg);
  `}
  border-color: ${({ open }) => !!open && '#e5e5e5'} !important;
  box-shadow: ${({ open }) => !!open && '-1px 3px 10px 0 rgb(0 0 0 / 6%)'};
  padding: 5px;
  margin-right: 0.5rem;
  border: 1px solid transparent;
  border-radius: 50%;
`;

export const CollapseContent = styled.div<Props>`
  border-top: none;
  opacity: ${({ open }) => open? "1" : "0"};
  max-height: ${({ open }) => open? "100%" : "0"};
  overflow: hidden;
  padding: ${({ open }) => open ? "0.8rem" : "0 0.8rem"};
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  -webkit-font-smoothing: antialiased;
  p {
    color: #a2a5b9;
  }
`;