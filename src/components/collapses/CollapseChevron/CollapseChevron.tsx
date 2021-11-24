import React, { useState } from 'react';
import {
  CollapseChevronDownIcon, CollapseContent, CollapseField,
  CollapseHeader
} from './CollapseChevron.style';

interface Props {
  title: string,
  content: string,
}

function CollapseChevron({ title, content }: Props) {
  const [showContent, setShowContent] = useState(false);

  const handleClick = () => setShowContent(!showContent);

  return (
    <CollapseField >
      <CollapseHeader>
        <h3>{title}</h3>
        <CollapseChevronDownIcon 
          className={showContent ? 'isActive' : undefined} 
          onClick={handleClick} />
      </CollapseHeader>
      <CollapseContent showContent={showContent}>
        <p>{content}</p>
      </CollapseContent>
    </CollapseField>
  );
}

export default CollapseChevron;