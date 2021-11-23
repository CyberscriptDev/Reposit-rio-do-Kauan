import React, { useState } from 'react';
import {
  CollapseContent, CollapseField,
  CollapseHeader, CollapseMinusIcon, CollapsePlusIcon
} from './Collapses.elements';

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
        {showContent ? 
          <CollapseMinusIcon onClick={handleClick}/>
          : 
          <CollapsePlusIcon onClick={handleClick} />
        }
      </CollapseHeader>
      <CollapseContent showContent={showContent}>
        <p>{content}</p>
      </CollapseContent>
    </CollapseField>
  );
}

export default CollapsePlus;
