import React from 'react';
import Switch from './Switch';
import { SwitchBlock, SwitchOption } from './Switch.elements';

interface Props {
  color?: string,
  option?: string,
  id: string
}

function SwitchWithOption({ color, option, id }: Props) {
  return (
    <SwitchBlock>
      <Switch id={id} color={color}/>
      <SwitchOption>{option}</SwitchOption>
    </SwitchBlock>
  );
}

export default SwitchWithOption;
