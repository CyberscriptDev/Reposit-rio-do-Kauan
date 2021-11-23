import React from 'react';
import { SwitchThinBlock, ThinOption } from './ThinOptionSwitch.style';
import SwitchThin from '../ThinSwitch/ThinSwitch';

interface Props {
  color?: string,
  option?: string,
  id: string
}

function ThinOptionSwitch({ color, option, id }: Props) {
  return (
    <SwitchThinBlock>
      <SwitchThin id={id} color={color}/>
      <ThinOption>{option}</ThinOption>
    </SwitchThinBlock>
  );
}

export default ThinOptionSwitch;