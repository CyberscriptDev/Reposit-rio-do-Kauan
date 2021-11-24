import React, { useState } from 'react';
import {
  CollapseContent, CollapseField,
  CollapseHeader, CollapsePlusIcon
} from './CollapsePlus.style';

interface Props {
  title: string,
  content: string,
}

function CollapsePlus({ title, content }: Props) {
  const [showContent, setShowContent] = useState(false);

  const handleClick = () => setShowContent(!showContent);

  return (
    <CollapseField>
      <CollapseHeader>
        <h3>{title}</h3>
        <CollapsePlusIcon 
          className={showContent ? 'isActive' : undefined} 
          onClick={handleClick} />
      </CollapseHeader>
      <CollapseContent showContent={showContent}>
        <p>{content}</p>
      </CollapseContent>
    </CollapseField>
  );
}

export default CollapsePlus;
