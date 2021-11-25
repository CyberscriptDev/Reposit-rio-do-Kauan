import React, { useState } from 'react';
import {
  OptionField, SwitchField,
  SwitchThinControl,
  SwitchThinInput
} from './OptionThinSwitch.style';

interface Props {
  color?: string;
  id: string;
  onChange?: () => void;
  sliderWidth?: number;
  option?:string;
  optionColor?: string;
}

function OptionThinSwitch({ color, id, onChange, sliderWidth, option, optionColor }: Props) {
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = () => setIsChecked(!isChecked);

  return (
    <SwitchField>
      <SwitchThinInput
        id={id}
        type="checkbox"
        checked={isChecked}
        onChange={() => onChange}
        onClick={handleClick}
      />
      <SwitchThinControl 
        color={color} 
        isChecked={isChecked} 
        htmlFor={id}
        sliderWidth={sliderWidth}
      >
      </SwitchThinControl>
      <OptionField optionColor={optionColor}>
        <span>{option}</span>
      </OptionField>
    </SwitchField>
  );
}

export default OptionThinSwitch;
