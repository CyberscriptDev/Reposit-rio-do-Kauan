import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import styled from 'styled-components';

interface Props {
  showContent: boolean,
}

export const CollapseField = styled.div`
  padding: 0.8rem;
  margin: 0px;
  width: 26rem;
  display: flex;
  border-radius: 0.3rem;
  border: 0.1rem solid #a2a5b9;
  flex-wrap: wrap;
`;

export const CollapseHeader = styled.div`
  display: flex;
  width: 100%;
  height: 1.50rem;
  justify-content: space-between;
  align-items: center;

  h3 {
    font-weight: normal;
    color: #283252;
  }
`;

export const CollapsePlusIcon = styled(AiOutlinePlus)`
  color: #a2a5b9;
  margin-right: 0.5rem;
  border: 0.1rem solid #a2a5b9;
  border-radius: 50%;
  cursor: pointer;
`;

export const CollapseMinusIcon = styled(AiOutlineMinus)`
  color: #a2a5b9;
  margin-right: 0.5rem;
  border: 0.1rem solid #a2a5b9;
  border-radius: 50%;
  cursor: pointer;
`;

export const CollapseChevronDownIcon = styled(IoIosArrowDown)`
  color: #a2a5b9;
  margin-right: 0.5rem;
  border: 0.1rem solid #a2a5b9;
  border-radius: 50%;
  cursor: pointer;
`;

export const CollapseChevronUpIcon = styled(IoIosArrowUp)`
  color: #a2a5b9;
  margin-right: 0.5rem;
  border: 0.1rem solid #a2a5b9;
  border-radius: 50%;
  cursor: pointer;
`;

export const CollapseContent = styled.div<Props>`
  border-top: none;
  opacity: ${({ showContent }) => showContent ? "1" : "0"};
  max-height: ${({ showContent }) => showContent ? "100%" : "0"};
  overflow: hidden;
  padding: ${({ showContent }) => showContent ? "0.8rem" : "0 0.8rem"};
  -webkit-box-flex: 1;
  flex: 1;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
  -webkit-font-smoothing: antialiased;
  p {
    color: #a2a5b9;
  }
`;
