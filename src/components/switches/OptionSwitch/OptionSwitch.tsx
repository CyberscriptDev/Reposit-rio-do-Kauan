import React from 'react';
import Switch from '../Switch/Switch';
import { SwitchBlock, Option } from './OptionSwitch.style';

interface Props {
  color?: string,
  option?: string,
  id: string
}

function OptionSwitch({ color, option, id }: Props) {
  return (
    <SwitchBlock>
      <Switch id={id} color={color}/>
      <Option>{option}</Option>
    </SwitchBlock>
  );
}

export default OptionSwitch;
