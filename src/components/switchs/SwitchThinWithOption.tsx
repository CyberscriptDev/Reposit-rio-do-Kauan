import React from 'react';
import { SwitchBlock, SwitchOption } from './Switch.elements';
import SwitchThin from './SwitchThin';

interface Props {
  color?: string,
  option?: string,
  id: string
}

function SwitchThinWithOption({ color, option, id }: Props) {
  return (
    <SwitchBlock>
      <SwitchThin id={id} color={color}/>
      <SwitchOption>{option}</SwitchOption>
    </SwitchBlock>
  );
}

export default SwitchThinWithOption;