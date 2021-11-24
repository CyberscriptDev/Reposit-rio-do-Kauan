import { AiOutlinePlus } from 'react-icons/ai';
import styled, { keyframes } from 'styled-components';

interface Props {
  showContent: boolean,
}

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(45deg);
  }
`;

const invertedRotate = keyframes`
from {
  transform: rotate(45deg);
}

to {
  transform: rotate(0deg);
}
`;

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

  .isActive {
    -webkit-animation: ${rotate} 0.2s;
    animation: ${rotate} 0.2s;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    border-color: #e5e5e5 !important;
    border-radius: 50%;
    box-shadow: -1px 3px 10px 0 rgb(0 0 0 / 6%);
  }
`;

export const CollapsePlusIcon = styled(AiOutlinePlus)`
  color: #a2a5b9;
  -webkit-animation: ${invertedRotate} 0.2s;
  animation: ${invertedRotate} 0.2s;
  margin-right: 0.5rem;
  padding: 5px;
  border: 1px solid transparent;
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