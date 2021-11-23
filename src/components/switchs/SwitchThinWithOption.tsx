import React from 'react';
import { SwitchThinBlock, SwitchThinOption } from './Switch.elements';
import SwitchThin from './SwitchThin';

interface Props {
  color?: string,
  option?: string,
  id: string
}

function SwitchThinWithOption({ color, option, id }: Props) {
  return (
    <SwitchThinBlock>
      <SwitchThin id={id} color={color}/>
      <SwitchThinOption>{option}</SwitchThinOption>
    </SwitchThinBlock>
  );
}

export default SwitchThinWithOption;