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
  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen(!open);

  return (
    <CollapseField>
      <CollapseHeader onClick={handleClick}>
        <h3>{title}</h3>
        <CollapsePlusIcon 
          open={open} 
        />
      </CollapseHeader>
      <CollapseContent open={open}>
        <p>{content}</p>
      </CollapseContent>
    </CollapseField>
  );
}

export default CollapsePlus;
