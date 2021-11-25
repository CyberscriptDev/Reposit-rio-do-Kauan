import React, { useState } from 'react';
import {
  OptionField,
  SwitchButton,
  SwitchControl,
  SwitchField, SwitchInput
} from './OptionSwitch.style';

interface Props {
  color?: string;
  id: string;
  onChange?: () => void;
  sliderWidth?: number;
  option ?: string;
  optionColor ?: string;
}

function OptionSwitch({ color, id, onChange, sliderWidth, option, optionColor }: Props) {
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = () => setIsChecked(!isChecked);

  return (
    <SwitchField>
      <SwitchControl 
        sliderWidth={sliderWidth} 
        isChecked={isChecked} 
        color={color} 
        htmlFor={id}>
        <SwitchInput  
          id={id}
          type="checkbox" 
          onClick={handleClick}
          onChange={() => onChange}/>
        <SwitchButton 
          sliderWidth={sliderWidth} 
          isChecked={isChecked} 
          color={color} />
      </SwitchControl>
      <OptionField optionColor={optionColor}>
        <span>{option}</span>
      </OptionField>
    </SwitchField>
  );
}

export default OptionSwitch;

