import React, { useState } from 'react';
import {
  CollapseChevronUpIcon, CollapseChevronDownIcon, CollapseContent, CollapseField,
  CollapseHeader
} from './Collapses.elements';

interface Props {
  title: string,
  content: string,
}

function CollapseChevron({ title, content }: Props) {
  const [showContent, setShowContent] = useState(false);

  const handleClick = () => setShowContent(!showContent);

  return (
    <CollapseField>
      <CollapseHeader>
        <h3>{title}</h3>
        {showContent ? 
          <CollapseChevronUpIcon onClick={handleClick} />
          : 
          <CollapseChevronDownIcon onClick={handleClick} />
        }
      </CollapseHeader>
      <CollapseContent showContent={showContent}>
        <p>{content}</p>
      </CollapseContent>
    </CollapseField>
  );
}

export default CollapseChevron;