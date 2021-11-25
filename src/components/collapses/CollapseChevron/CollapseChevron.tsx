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
  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen(!open);

  return (
    <CollapseField >
      <CollapseHeader onClick={handleClick}>
        <h3>{title}</h3>
        <CollapseChevronDownIcon 
          open={open}
        />
      </CollapseHeader>
      <CollapseContent open={open}>
        <p>{content}</p>
      </CollapseContent>
    </CollapseField>
  );
}

export default CollapseChevron;